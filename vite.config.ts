import { defineConfig } from "vite";
import { parseHTML } from "linkedom";
import fs from "node:fs/promises";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                contact: 'contact.html'
                
            }
        }
    },
    plugins: [
        {
            name: "html-partials",
            transformIndexHtml: {
                order: "pre",
                async handler(html) {
                    // create a DOM on the server
                    const dom = parseHTML(html);

                    // get list of file names
                    const partialFileNames = await fs.readdir("src/partials");

                    // process each partial
                    for (const fileName of partialFileNames) {
                        // remove `.html`
                        const name = fileName.split(".").at(0);

                        // read the file as text
                        const content = await fs.readFile(
                            `src/partials/${fileName}`,
                            "utf-8",
                        );

                        if (name && content) {
                            // create a `partialDom` based on the `content` with LinkeDOM
                            const partialDom = parseHTML(content);

                            const scriptsAndStyles =
                                partialDom.document.querySelectorAll("script, style");
                            for (const el of scriptsAndStyles) {
                                // copy the scripts and styles to the main dom
                                dom.document.head.append(el.cloneNode(true));

                                // remove from the partial
                                el.remove();
                            }

                            // find `my-button` elements in the main `dom`
                            const elements = dom.document.querySelectorAll(name);
                            for (const el of elements) {
                                const slot = partialDom.document.querySelector("slot");

                                // add the slotted content from the main `dom`
                                // inside the slot in the partial
                                if (slot?.parentElement) {
                                    slot.parentElement.innerHTML = el.innerHTML;
                                }

                                // replace content of the element with the final partial
                                el.innerHTML = partialDom.document.toString();
                            }
                        }
                    }

                    // return the updated html string
                    return dom.document.toString();
                },
            },
        },
    ],
});