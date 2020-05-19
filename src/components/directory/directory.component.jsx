import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "PRICING",
          imageUrl:
            "https://i.ibb.co/8NJ3076/79-A725-F8-688-A-4768-BA35-4602-D68-BF92-D.jpg",
          id: 1,
          linkUrl: "shop/pricing",
        },
        {
          title: "TAXES",
          imageUrl:
            "https://i.ibb.co/Q6fh9cR/445168-F5-96-ED-4467-9-A2-F-44-C1-BB41-A61-C.jpg",
          id: 2,
          linkUrl: "shop/taxes",
        },
        {
          title: "BRANDING",
          imageUrl:
            "https://i.ibb.co/FJhfjN4/97-A9-E7-FB-0-A16-47-A9-B1-BB-F5-A15-F0-C77-CB.jpg",
          id: 3,
          linkUrl: "shop/branding",
        },
        {
          title: "HEALTH CARE",
          imageUrl:
            "https://i.ibb.co/RCPhG4t/D95-C2-B91-A73-A-4-B8-C-B2-D0-191800-EA6-A80.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/health",
        },
        {
          title: "BUSINESS",
          imageUrl:
            "https://i.ibb.co/5j7rBMM/FE885397-1-AA0-4482-ADF1-76-DA6-AD83-B89.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/business",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
