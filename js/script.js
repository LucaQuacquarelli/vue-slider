var app = new Vue(
    {
        el: "#root",
        data: {
            images: [
                "https://i.pinimg.com/originals/f6/3d/4b/f63d4b06c989dfe6c1039497441115b3.jpg","https://images2.alphacoders.com/516/thumb-1920-516664.jpg","https://i.pinimg.com/originals/9f/77/02/9f77024d7233d8d68f344cad23f64408.jpg","https://i.redd.it/tfqiq1aqjx351.png","https://wallpaperaccess.com/full/1972280.jpg"
            ],
            imageIndex: 0
        },
        methods: {
            nextImage: function() {
                this.imageIndex++;

                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0
                }
            },
            prevImage: function() {
                this.imageIndex--;

                if (this.imageIndex == -1 ) {
                    this.imageIndex = this.images.length -1
                }
            }
        }   
    }   
)