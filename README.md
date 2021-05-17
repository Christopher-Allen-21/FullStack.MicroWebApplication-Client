
![ZT Logo Github](https://user-images.githubusercontent.com/78838228/118234712-bcf60800-b461-11eb-8651-4ce15657d898.png)
# ZipTube v7.0 - Micro Web Application
* **Objective** - to create an implementation of a small web service
* **Purpose** - to demonstrate the construction of a full-stacked web-application, development of both front end (client side) and back end(server side) portions of web application, hosting on cloud services for deployment.

# Contributors:
* Chris Allen ([@Christopher-Allen-21](https://github.com/Christopher-Allen-21)) | [Chris Allen's Linkedin](www.linkedin.com/in/chrisallen2110/ "Connect with Chris")
* Theresa Mashura ([@theresa-mashura](https://github.com/theresa-mashura)) | [Theresa Mashura's Linkedin](www.linkedin.com/in/theresamashura/ "Connect with Theresa") 
* Justin Banks ([@Jbanksalpha](https://github.com/Jbanksalpha)) | [Justin Banks' Linkedin](www.linkedin.com/in/justinlbanks/ "Connect with Justin")  
* Mike Ninh ([@MNinh](https://github.com/MNinh)) | [Mike Ninh's Linkedin](www.linkedin.com/in/mikeninh/ "Connect with Mike") 

# Website
* https://master.dcqz99xhopewe.amplifyapp.com/


# Back End of ZipTube Application
* https://github.com/MNinh/FullStack.MicroWebApplication-Server (This repository)


# Front End of ZipTube Application
* https://github.com/Christopher-Allen-21/FullStack.MicroWebApplication-Client

# Video Library Application
## User Interaction 
* As a client, (logged in) I
    * can upload new videos
	* can view list of all videos
	* can filter videos by category
	* can post simple text-comments on a video
	* can get in contact with developers
	* can view profile
	* can like or dislike videos
	* view history of watched videos
	* logout of account

* As a client, (not logged in) I
    * can view list of all videos
    * login into account via auth0
    * make an account via auth0

## Developmental Notes

### Tech Stack
* **UML Diagram** - PlantUML
* **Wireframe** - Mockflow
* **Visual UI/Front end** - Reactjs
* **Business Logic/Back end** - Java built on Maven with Spring Boot framework
* **Data Layer** - MySQL hosted with AWS RDS
* **Cloud** - Backend logic hosted by Heroku. Frontend hosted with AWS Amplify. AWS S3 buckets for video storage.

### Installation
#### Back End
* Use Spring Initializer to create an starting point for you application
* Project Lombok
* AWS S3 Access Keys

#### Front End
* `npm install` for React
* import React-Bootstrap, auth0-react, react-router-don, react-promist-tracker, emailjs-com

### Running the Application
#### Back End
* You can run back-end by running the VideoAppApplication.java from: com/GroupProject/VideoApp/VideoAppApplication.java

#### Front End
* You can run reactjs with:
``npm start``


# DEMO
![ZT Login](https://user-images.githubusercontent.com/78838228/118232750-07c25080-b45f-11eb-878d-b904bc2daa35.png)

![ZT Home Page Trending](https://user-images.githubusercontent.com/78838228/118233158-89b27980-b45f-11eb-95d2-e68b6bacb995.png)

![ZT Video page](https://user-images.githubusercontent.com/78838228/118236706-6807c100-b464-11eb-890c-348f35ba0e10.png)

![ZT Explore](https://user-images.githubusercontent.com/78838228/118233168-8c14d380-b45f-11eb-8eb5-5071bb13cf7f.png)

![ZT Upload](https://user-images.githubusercontent.com/78838228/118233174-8e772d80-b45f-11eb-83a1-cc2b2b90867b.png)

![ZT User Profile](https://user-images.githubusercontent.com/78838228/118233179-9040f100-b45f-11eb-93a9-b70f38047acb.png)

![ZT History](https://user-images.githubusercontent.com/78838228/118233186-920ab480-b45f-11eb-97f7-4a97492067e7.png)

![ZT Support](https://user-images.githubusercontent.com/78838228/118233194-946d0e80-b45f-11eb-9d45-37c6450a1e81.png)
