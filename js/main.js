const shoping = [
    {
        id: 1,
        title: "Kitoblar",
        image: "https://assets.asaxiy.uz/product/items/desktop/721e7285b298cde5b3d0c973ed8d7b632022060312004963698PRIyhV3K1W.jpg.webp",
        price: 999000,
        month: 12,
        product_number: 1,

    }
    ,
    {
        id: 2,
        title: "Samsung changyutgichi",
        image: "https://assets.asaxiy.uz/product/items/desktop/5e15c06e88c8c.jpeg.webp",
        price: 2209000,
        month: 12,
        product_number: 1,
    },
    {
        id: 3,
        title: "PowerBank Wekome Hunergy WP-171 50000 mAh ",
        image: "https://assets.asaxiy.uz/product/items/desktop/a5b93aaec935a59987f8a5f2280e7cd720230731164401300313McoeNbOi4.jpg.webp",
        price: 369000,
        month: 12,
        product_number: 1,
    },
    {
        id: 4,
        title: " Honor X8A 6/128GB Kumushrang Smartfoni",
        image: "https://assets.asaxiy.uz/product/main_image/desktop//6435066082d9f.png.webp",
        price: 3000000,
        month: 12,
        product_number: 1,
    },
    {
        id: 5,
        title: " Xiaomi Redmi Note 12 Pro 8/256GB Kulrang Smartfoni ",
        image: "https://assets.asaxiy.uz/product/main_image/desktop//6452084011451.png.webp",
        price: 3500000,
        month: 12,
        product_number: 1,
    }, {
        id: 6,
        title: " Xiaomi Mi Band 8 Qora smart-bilaguzugi ",
        image: "https://assets.asaxiy.uz/product/main_image/desktop//646dd166918e9.png.webp",
        price: 999000,
        month: 12,
        product_number: 1,
    }
    , {
        id: 7,
        title: "Borofone portable BH70 noutbuk podstavkasi",
        image: "https://assets.asaxiy.uz/product/main_image/desktop//63d4f87c26276.jpg.webp",
        price: 80000,
        month: 12,
        product_number: 1,
    },
    {
        id: 8,
        title: "Беспроводные наушники Apple AirPods Max (Red)",
        image: "https://assets.asaxiy.uz/product/items/desktop/f0935e4cd5920aa6c7c996a5ee53a70f2023062209454489533jZ2DZnLaTB.jpg.webp",
        price: 159000,
        month: 12,
        product_number: 1,
    },

    {
        id: 9,
        title: "Mikrafonlar",
        image: "https://assets.asaxiy.uz/product/main_image/desktop//64d48cb779be7.jpg.webp",
        price: 150000,
        month: 12,
        product_number: 1,
    },

]
const userId = JSON.parse(localStorage.getItem("userId"));
const newObj = {
    userId: userId,
    product: [],
}

/* userning id si  */

// console.log(userId)
const elform = document.querySelector(".form");
const searchInput = document.querySelector(".search");
const list = document.querySelector(".list");
const favoritesList = document.querySelector(".fovorites");
const fovoriteBtn = document.querySelector(".love");
const lovescount = document.querySelector(".lovescount");
const buynum = document.querySelector(".buynum");
const saved_btn = document.querySelector(".saved_btn");
const buylist = document.querySelector(".buy");
const fragment = document.createDocumentFragment();
function renderFunction(data, nodelist, change) {
    data.forEach(element => {
        const itemelement = document.createElement("li");
        itemelement.classList.add("item");
        const imagelement = document.createElement("img");
        imagelement.classList.add("image");
        const titleelement = document.createElement("h3");
        titleelement.classList.add("title");
        const priceelement = document.createElement("span");
        priceelement.classList.add("price");
        const monthelemet = document.createElement("p");
        monthelemet.classList.add("month");
        const bookmark = document.createElement("button");
        bookmark.classList.add("bookmark");
        bookmark.dataset.id = element.id;
        const saved = document.createElement("button");
        saved.classList.add("saved");
        saved.dataset.id = element.id;
        saved.dataset.id = element.id;
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletefavorite");
        deleteBtn.innerHTML = "<🗑️>"
        deleteBtn.dataset.id = element.id;
        const countWrapperPlusMinus = document.createElement("span")
        countWrapperPlusMinus.classList.add("plusminuswrapper");
        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.classList.add("plus");
        plus.dataset.id = element.id
        const minus = document.createElement("button");
        minus.textContent = "-";
        minus.classList.add("minus");
        minus.dataset.id = element.id;
        const buycount = document.createElement("p");
        buycount.textContent = element.product_number;
        buycount.style.color = "green"
        buycount.style.fontSize = "24px"
        buycount.classList.add("buycount");

        if (change == 1) {
            imagelement.width = "200";
            imagelement.height = "250";
            itemelement.append(imagelement, titleelement, priceelement, monthelemet, bookmark, saved);
        }
        if (change == 2) {

            wrapper.append(titleelement, priceelement, monthelemet, deleteBtn);
            itemelement.append(imagelement, wrapper);
            itemelement.classList.add("flex");
            imagelement.width = "180";
            imagelement.height = "190";

        }
        if (change == 3) {
            countWrapperPlusMinus.append(plus, minus);
            itemelement.append(titleelement, priceelement, buycount, countWrapperPlusMinus)
        }
        fragment.appendChild(itemelement);
        imagelement.src = element.image;
        titleelement.textContent = element.title;
        priceelement.textContent = `Narxi: ${element.price}`;
        monthelemet.textContent = `Muddati: ${element.month}`;

    })
    nodelist.append(fragment);
}
renderFunction(shoping, list, 1);

elform.addEventListener("submit", (evt) => {
    list.innerHTML = ""
    evt.preventDefault();
    const SearchValue = searchInput.value.toLowerCase().trim();
    // console.log(SearchValue);
    const findTitle = shoping.filter(item => {
        return item.title.toLowerCase().includes(SearchValue);
    })
    renderFunction(findTitle, list, 1);
    console.log(findTitle);

})

/*      ============================================================= */
let BookArr = JSON.parse(localStorage.getItem("BookArr") || "[]");
localStorage.setItem("BookArr", JSON.stringify(BookArr));
lovescount.textContent = BookArr.length;
renderFunction(BookArr, favoritesList, 2);

/* ================================================ */
const BuyArr = JSON.parse(localStorage.getItem("BuyArr") || "[]");
localStorage.setItem("BuyArr", JSON.stringify(BuyArr));
buynum.textContent = BuyArr.length
renderFunction(BuyArr, buylist, 3);
/* -=-===-=-=-=-=-==-=-=-==-=-=-=-=-=-=-=- */
list.addEventListener("click", (evt) => {
    if (evt.target.matches(".bookmark")) {
        const BtnId = evt.target.dataset.id;
        const BtnFind = shoping.find(item => {
            return item.id == BtnId;
        })
        const findSec = BookArr.find(item => {
            return item.id == BtnId;
        })
        if (!findSec) {
            BookArr.push(BtnFind)
        }
        localStorage.setItem("BookArr", JSON.stringify(BookArr));
        lovescount.classList.add("savedcount");
        favoritesList.innerHTML = "";
        lovescount.textContent = BookArr.length;
        renderFunction(BookArr, favoritesList, 2);
    }


    /*  buy */
    if (evt.target.matches(".saved")) {
        const BtnID = evt.target.dataset.id;
        const BuyFind = shoping.find(item => {
            return item.id == BtnID
        })
        // console.log(BuyFind);
        const secBuyFind = BuyArr.find(secbuy => {
            return secbuy.id == BtnID
        })
        if (!secBuyFind) {
            BuyArr.push(BuyFind)
        }
        localStorage.setItem("BuyArr", JSON.stringify(BuyArr));
        buylist.innerHTML = ""
        buynum.textContent = BuyArr.length;
        renderFunction(BuyArr, buylist, 3);
    }
});

// console.log(fovoriteBtn)
fovoriteBtn.addEventListener("click", evt => {
    evt.preventDefault();
    favoritesList.classList.toggle("lovelist");
    buylist.classList.remove("buylistview");
})


const buyProduct = JSON.parse(localStorage.getItem("buyProduct") || "[]");
localStorage.setItem("buyProduct", JSON.stringify(buyProduct));
renderFunction(BookArr, favoritesList, 2);




/*  delete btn part */
favoritesList.addEventListener("click", evt => {
    if (evt.target.matches(".deletefavorite")) {
        const BtnID = evt.target.dataset.id;
        const BtnFind = BookArr.findIndex(item => {
            return BtnID == item.id
        })
        BookArr.splice(BtnFind, 1);
        localStorage.setItem("BookArr", JSON.stringify(BookArr));

    }
    favoritesList.innerHTML = ""
    renderFunction(BookArr, favoritesList, 2);
    lovescount.textContent = BookArr.length;
    console.log(BookArr)

})

/*   yangi obekt yaratamiz */

// console.log(newObj)
/*  user royhatdan o'tgan  array */
const registrArr = JSON.parse(localStorage.getItem("registrArr"));
// console.log(registrArr);
/*  cart part */

saved_btn.addEventListener("click", evt => {
    evt.preventDefault();
    buylist.classList.toggle("buylistview");
    favoritesList.classList.remove("lovelist")
})

buylist.addEventListener("click", evt => {
    if (evt.target.matches(".plus")) {
        const BTNid = evt.target.dataset.id;
        const NEWS = BuyArr.find(num => {
            return num.id == BTNid;
        })
        ++NEWS.product_number;
        const RES = newObj.product.find(sum => {
            return sum.id == BTNid;
        })
        if (!RES) {
            newObj.product.push(NEWS);
        }

    }
    if (evt.target.matches(".minus")) {
        const BTNid = evt.target.dataset.id;
        const NEWS = BuyArr.find(num => {
            return num.id == BTNid;
        })

        --NEWS.product_number;
        const RES = newObj.product.find(sum => {
            return sum.id == BTNid;
        })
        if (!RES) {
            newObj.product.push(NEWS);
        }
    }
    console.log(newObj)
    if (newObj.userId == null) {
        alert("Autenfikatsiya jarayonidan o'ting  ");
        window.location.href = "login.html"
    }
    buylist.innerHTML = ""
    renderFunction(BuyArr, buylist, 3);
    registrArr[0].product.push(newObj)
    console.log(registrArr)
})














