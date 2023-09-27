export interface Item {
    id: number;
    title: string;
    desc: string;
    image: string;
  }
  
  export interface Items {
    coworkingSpace: Item[];
    makerSpace: Item[];
    evenSpace: Item[];
    meetingSpace: Item[];
    officeSpace: Item[];
  }
  
  export const items: Items = {
    coworkingSpace: [
      {
        id: 1,
        title: "Co-working Space",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image: "https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/271276266_299105748840889_7229503395106885408_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGPac8eYSm1G1Pf_tQKKmmSijFizVXQWDeKMWLNVdBYN5X2kaO0Au-r6HnwnHDk8_ZMRSRrt_K-njQ45IGUD6X4&_nc_ohc=zlq6SZGV_AYAX_8cxHF&_nc_ht=scontent.fvte5-1.fna&oh=00_AfAi6k_n_jkbfXg1DNGqhBQbRe9yGW9nqQJ8s7gOZUpnwA&oe=64FEDE57",
      },
      {
        id: 2,
        title: "Free WIFI",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image: "https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/271276266_299105748840889_7229503395106885408_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGPac8eYSm1G1Pf_tQKKmmSijFizVXQWDeKMWLNVdBYN5X2kaO0Au-r6HnwnHDk8_ZMRSRrt_K-njQ45IGUD6X4&_nc_ohc=zlq6SZGV_AYAX_8cxHF&_nc_ht=scontent.fvte5-1.fna&oh=00_AfAi6k_n_jkbfXg1DNGqhBQbRe9yGW9nqQJ8s7gOZUpnwA&oe=64FEDE57",
      },
      // Add more items here
    ],
    makerSpace: [
      {
        id: 1,
        title: "Maker Space",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image: "https://scontent.fvte5-1.fna.fbcdn.net/v/t39.30808-6/375051235_607407854893194_312698494727720050_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGh73nIyfiChrAj0xBRdH9Gownpt-u2KBejCem367YoF_oYWY8VOynwzvsUYFwnphi0UXGRFcN2rg6RWPB8h9JL&_nc_ohc=Ws5-9a9FQuYAX9rvDie&_nc_ht=scontent.fvte5-1.fna&oh=00_AfDzmwveNvKI2_E_mxW87qArkqipyR02DyJRV7_5pR0UIg&oe=64FD964D",
      },
      // Add more items here
    ],
    evenSpace: [
      {
        id: 1,
        title: "Events Space",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
        image: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
      },
      // Add more items here
    ],
    meetingSpace: [
        {
          id: 1,
          title: "Events Space",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
        },
        // Add more items here
      ],
      officeSpace: [
        {
          id: 1,
          title: "Events Space",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
          image: "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
        },
        // Add more items here
      ],
  };