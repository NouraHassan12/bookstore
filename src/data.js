import book1 from "./images/7k.jpg";
import book2 from "./images/novell222.jpg";
import book3 from "./images/rrr.jpg";
import book4 from "./images/lj.jpg";
import img8 from "./images/mn.jpg";
import img12 from "./images/92.jpg";

export default [
 
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Novel 111",
      slug: "Novelone",
      type: "book",
      price: 400,
      bublicationdate:1998,
      featured: true,
      description:
        " Novel 111 :Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text",
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: book2
            }
          }
        },
        {
          fields: {
            file: {
              url: book3
            }
          }
        },
        {
          fields: {
            file: {
              url: book4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Novel 11",
      slug: "noveltwo",
      type: "book",
      price: 500,
      bublicationdate:1800,
      description:
        " noveltwo:Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text",
        featured: true,
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: book2
            }
          }
        },
        {
          fields: {
            file: {
              url: book3
            }
          }
        },
        {
          fields: {
            file: {
              url:book4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "NOVEL 1",
      slug: "novelthree",
      type: "Book",
      price: 600,
      bublicationdate:1950,
      description:
        " novelthree:Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text",
        featured: true,
      images: [
        {
          fields: {
            file: {
              url: book1
            }
          }
        },
        {
          fields: {
            file: {
              url: book2
            }
          }
        },
        {
          fields: {
            file: {
              url: book3
            }
          }
        },
        {
          fields: {
            file: {
              url: book4
            }
          }
        }
      ]
    }
  }
];
