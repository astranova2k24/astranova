import React from "react";
import SingleEventPage from "../../components/single-event-page/SingleEventPage";
import WorkshopImg from "../../assets/event-images/workshop.jpg";

const workshop = {
  image: WorkshopImg,
  description:
    "Orange is an open-source data visualization, machine learning, and data mining toolkit. It offers a visual programming interface for data analysis, allowing users to interactively explore and analyze datasets without needing to write code. Orange provides ML functionalities such as data preprocessing, feature selection, classification, regression, clustering, association rule mining, and more.",
  type: "Technical Event",
  eventName: "Work Shop",
  dateTime: "March 09, 11:00AM - 1:00PM ",
  venue: "IT-444",
  rules: [
    "Orange is an open-source data visualization, machine learning, and data mining toolkit developed at the University of Ljubljana, Slovenia. It offers a visual programming interface for data analysis, allowing users to interactively explore and analyze datasets without needing to write code.",
    "Orange provides a wide range of functionalities, including data preprocessing, feature selection, classification, regression, clustering, association rule mining, and more. Its visual programming interface allows users to create workflows by connecting predefined components called widgets, which represent different data analysis techniques and algorithms.",
    // "Django, the framework that this workshop is based on, provides a high-level of abstraction and follows the Model-View-Controller (MVC) architecture, which simplifies the development process and reduces the amount of code required.",
    // "Gain practical knowledge of Python and Django that can be applied to real-world backend development projects.",
    // "Enhance their resume with a valuable skill set that is in high demand in the job market.",
    // "Participants who successfully complete the workshop will receive an e-certificate that acknowledges their completion of the program.",
  ],

  contact: [
    {
      name: "Suganth S",
      phoneNo: "6369633556",
    },
    {
      name: "Vigneshwari G",
      phoneNo: "9894457113",
    },
  ],
};

const Workshop = () => {
  return (
    <SingleEventPage eventDetails={workshop} noPrize={true} isDetails={true} />
  );
};

export default Workshop;
