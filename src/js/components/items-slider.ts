// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default () => ({
    swiper: {},
    $refs: {
        container:  HTMLElement as any
    },
    init() {
        this.swiper = new Swiper(this.$refs.container, {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 10,

            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            },
            modules: [Navigation, Autoplay],
        })
    },

})