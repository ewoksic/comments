class Person {
  constructor() {
    this.reviews = [
      {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
    ];
    this.image = document.getElementById("person-img");
    this.author = document.getElementById("author");
    this.position = document.getElementById("job");
    this.info = document.getElementById("info");
    this.prevBtn = document.querySelector(".prev-btn");
    this.nextBtn = document.querySelector(".next-btn");
    this.randomBtn = document.querySelector(".random-btn");
    this.currentItem = 0;
    this.events();
  }
  events() {
    window.addEventListener("DOMContentLoaded", () =>
      this.showPerson(this.currentItem)
    );
    this.prevBtn.addEventListener("click", () => this.nextItem());
    this.nextBtn.addEventListener("click", () => this.prevItem());
    this.randomBtn.addEventListener("click", () => this.randomPerson());
  }

  showPerson(x) {
    let item = this.reviews[x];
    this.image.src = item.img;
    this.author.innerText = item.name;
    this.position.innerText = item.job;
    this.info.innerText = item.text;
  }

  nextItem() {
    this.currentItem++;
    if (this.currentItem > this.reviews.length - 1) {
      this.currentItem = 0;
    }
    this.showPerson(this.currentItem);
  }
  prevItem() {
    this.currentItem--;
    if (this.currentItem < 0) {
      this.currentItem = this.reviews.length - 1;
    }
    this.showPerson(this.currentItem);
  }
  randomPerson() {
    this.currentItem = Math.floor(Math.random() * this.reviews.length);
    this.showPerson(this.currentItem);
  }
}

export default Person;
