document.addEventListener("DOMContentLoaded", function() {
    fetch("slider_data.json")
    .then(response => response.json())
    .then(data => {
        const newsGrid = document.getElementById("newsGrid");

        data.forEach(newsItem => {
            const newsItemElement = document.createElement("div");
            newsItemElement.classList.add("news-item");

            const image = document.createElement("img");
            image.src = newsItem.imgUrl;
            image.alt = newsItem.name;

            // Create custom headlines based on the information
            let headline = "";
            if (newsItem.name === "Taj Mahal") {
                headline = "Explore the Iconic Taj Mahal";
            } else if (newsItem.name === "Hampi Monuments") {
                headline = "Discover the Ancient Wonders of Hampi";
            } else if (newsItem.name === "Mount Kailash") {
                headline = "Embark on a Spiritual Journey to Mount Kailash";
            } else if (newsItem.name === "Amber Fort") {
                headline = "Step Back in Time at the Majestic Amber Fort";
            } else if (newsItem.name === "Konark Sun Temple") {
                headline = "Marvel at the Magnificent Konark Sun Temple";
            } else if (newsItem.name === "Mysore Palace") {
                headline = "Experience Royalty at the Mysore Palace";
            } else {
                headline = "Explore the Beauty of " + newsItem.name;
            }

            // Create headline element
            const title = document.createElement("h3");
            title.textContent = headline;

            // Create description element
            const description = document.createElement("p");
            description.textContent = newsItem.description;

            newsItemElement.appendChild(image);
            newsItemElement.appendChild(title);
            newsItemElement.appendChild(description);

            newsGrid.appendChild(newsItemElement);
        });
    })
    .catch(error => {
        console.error("Error fetching news:", error);
    });
});


const slider = () => {
    const sliderRef = document.createElement("div");
    const loadingProgress = 0;

    const handleClickNext = () => {
        let items = sliderRef.querySelectorAll(".item");
        sliderRef.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = sliderRef.querySelectorAll(".item");
        sliderRef.prepend(items[items.length - 1]);
    };
    fetch('slider_data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.createElement("div");
            container.classList.add("container");

            const loadbar = document.createElement("div");
            loadbar.classList.add("loadbar");
            loadbar.style.width = `${loadingProgress}%`;

            container.appendChild(loadbar);
            container.appendChild(sliderRef);

            data.forEach((item) => {
                const slideItem = document.createElement("div");
                slideItem.classList.add("item");
                slideItem.style.backgroundImage = `url(${item.imgUrl})`;

                const content = document.createElement("div");
                content.classList.add("content");

                const name = document.createElement("div");
                name.classList.add("name");
                name.textContent = item.name;

                const des = document.createElement("div");
                des.classList.add("des");
                des.textContent = item.desc;

                const button = document.createElement("button");
                button.textContent = "See More";

                content.appendChild(name);
                content.appendChild(des);
                content.appendChild(button);
                slideItem.appendChild(content);
                sliderRef.appendChild(slideItem);
            });

            const buttons = document.createElement("div");
            buttons.classList.add("buttons");

            const prevButton = document.createElement("button");
            prevButton.id = "prev";
            prevButton.addEventListener("click", handleClickPrev);
            prevButton.innerHTML = "&#9664;";

            const nextButton = document.createElement("button");
            nextButton.id = "next";
            nextButton.addEventListener("click", handleClickNext);
            nextButton.innerHTML = "&#9654;";

            buttons.appendChild(prevButton);
            buttons.appendChild(nextButton);
            container.appendChild(buttons);

            document.getElementById("root").appendChild(container);
        })
        .catch(error => console.error('Error fetching slider data:', error));

   };

slider();
