AFRAME.registerComponent("thumbnails", {
    schema: {
        state: { type: "string", default: "places-list" },
        selectedCard: { type: "string", default: "#card1" },
    },
    init: function () {
        this.placesContainer = document.querySelector("#places-container");
        this.cameraEl = document.querySelector("#camera");
        this.makeThumbnails();
    },
    tick: function() {
        const { state } = this.el.getAttribute("thumbnails");
    
        if (state === "view") {
          this.hideEl([this.placesContainer]);
          this.showView();
        }
      },
      hideEl: function(elList) {
        elList.map(el => {
          el.setAttribute("visible", false);
        });
      },
      showView: function() {
        const { selectedCard } = this.data;
        window.location.href = "http://127.0.0.1:5500/letterPage.html";
        const letter = document.querySelector("#letter_container");
        letter.setAttribute("text", {
            font: "exo2bold",
            color: "#567d9c",
            align: "center",
            width: "2",
            value: `${selectedCard}`
          });
      },
    makeThumbnails: function () {
        const letter_thumbnail = [
            {
                id: "1",
                url: "./assets/Thumbnails/A.png",
                model: "./assets/Apple/scene.gltf",
                model_name: "Apple",
            },
            {
                id: "2",
                url: "./assets/Thumbnails/B.png",
                model: "./assets/Ball/scene.gltf",
                model_name: "Ball",
            },
            {
                id: "3",
                url: "./assets/Thumbnails/C.png",
                model: "./assets/Cat/scene.gltf",
                model_name: "Cat",
            },
            {
                id: "4",
                url: "./assets/Thumbnails/D.png",
                model: "./assets/Dog/scene.gltf",
                model_name: "Dog",
            },
            {
                id: "5",
                url: "./assets/Thumbnails/E.png",
                model: "./assets/Elephant/scene.gltf",
                model_name: "Elephant",
            },
            {
                id: "6",
                url: "./assets/Thumbnails/F.png",
                model: "./assets/Fish/scene.gltf",
                model_name: "Fish",
            },
            {
                id: "7",
                url: "./assets/Thumbnails/G.png",
                model: "./assets/Grapes/scene.gltf",
                model_name: "Grapes",
            },
            {
                id: "8",
                url: "./assets/Thumbnails/H.png",
                model: "./assets/Hen/scene.gltf",
                model_name: "Hen",
            }, 
            {
                id: "9",
                url: "./assets/Thumbnails/I.png"
            }, 
            {
                id: "10",
                url: "./assets/Thumbnails/J.png"
            }, 
            {
                id: "11",
                url: "./assets/Thumbnails/K.png"
            }, 
            {
                id: "12",
                url: "./assets/Thumbnails/L.png"
            }, 
            {
                id: "13",
                url: "./assets/Thumbnails/M.png"
            }, 
            {
                id: "14",
                url: "./assets/Thumbnails/N.png"
            }, 
            {
                id: "15",
                url: "./assets/Thumbnails/O.png"
            }, 
            {
                id: "16",
                url: "./assets/Thumbnails/P.png"
            }, 
            {
                id: "17",
                url: "./assets/Thumbnails/Q.png"
            }, 
            {
                id: "18",
                url: "./assets/Thumbnails/R.png"
            }, 
            {
                id: "19",
                url: "./assets/Thumbnails/S.png"
            }, 
            {
                id: "20",
                url: "./assets/Thumbnails/T.png"
            }, 
            {
                id: "21",
                url: "./assets/Thumbnails/U.png"
            }, 
            {
                id: "22",
                url: "./assets/Thumbnails/V.png"
            }, 
            {
                id: "23",
                url: "./assets/Thumbnails/W.png"
            }, 
            {
                id: "24",
                url: "./assets/Thumbnails/X.png"
            }, 
            {
                id: "25",
                url: "./assets/Thumbnails/Y.png"
            }, 
            {
                id: "26",
                url: "./assets/Thumbnails/Z.png"
            },

        ];
        let firstXposition = -70;
        let nextXposition = -45.5;
        let prevoiusXPosition = -70;
        for (var item of letter_thumbnail) {
            var posX = prevoiusXPosition + 12.5;
            var posY = 20;
            var posZ = -40;
            if (item.id >= 11) {
                posY = 0;
                posX = firstXposition + 12.5;
                firstXposition = posX
            }
            if (item.id >= 21) {
                posY = -20;
                posX = nextXposition + 12.5;
                nextXposition = posX
            }
            const position = { x: posX, y: posY, z: posZ };
            prevoiusXPosition = posX;

            // Border Element
            const borderEl = this.createBorder(position, item.id);

            // Thubnail Element
            const thumbNail = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            this.placesContainer.appendChild(borderEl);
        }
    },
    createBorder: function(position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "ring",
          radiusInner: 4,
          radiusOuter: 5
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "#0077CC",
          opacity: 1
        });
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
      },
      createThumbNail: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 4
        });
        entityEl.setAttribute("material", { src: item.url });
        entityEl.setAttribute("cursor-listener", {});
        return entityEl;
      },
})