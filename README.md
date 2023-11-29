# AWS-Serverless-computing

## Project Goal

The project aim is to build a website using core AWS services using serverless Architecture.


## What is Serverless coomputing ?

The ability to build and run servies without having to manage the underlying infrastructure. Or we can say that the infrastructure is provided and managed by cloud provider such as AWS in my case. We are just paying for the services that we are using without owning those services. We can scake the services provided by the cloud provided according to our needs.


## Technology Used

1. Python
2. HTML
3. CSS

## AWS Services Used


1. AWS S3 - Simple storage services (S3) is storage services where we can store our data on cloud in forms of buckets (Folder/directory) and object (files).

2. AWS Lambda - Is a serverless compute services that lets us run code in response to events and triggers.

3. DynamoDB - A fully managed non-relation database service offered by AWS that provide fast, predictable database performance. It is scalable and is readily available.

4. Amazon API Gateway - Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. APIs act as the "front door" for applications to access data, business logic, or functionality from your backend services.


## Architecture Diagram

![image](https://github.com/ankurcyb/AWS-Serverless-computing/assets/141453942/fb6a2cc9-c427-4208-ab6c-f5f74f3107e8)


## Implementation

1. Creating a S3 bucket:
The first step involves creating S3 bucket as a storage solution for the static web file. (HTML, CSS, and Javascrip code).

![s3](https://github.com/ankurcyb/AWS-Serverless-computing/assets/141453942/c396335c-96c7-46d0-af20-4696add5eeda)


3. Creating an AWS Lambda function:
The second step is to create a Lambda function to storing and retrieving the recipe data from the DynamoDB database. It is the main component of our serverless architecture.

![lambda](https://github.com/ankurcyb/AWS-Serverless-computing/assets/141453942/6d060a24-867c-483c-8035-dda166dc4234)
![image](https://github.com/ankurcyb/AWS-Serverless-computing/assets/141453942/0807e53b-b6cc-49fa-b6f8-1f484a837148)



4. Creating an Amazon API Gateway:
This step involves creating an API gateway to bridge the gap between our frontend and backend. The API gateway allows us to handle incoming requests and invoke the Lambda function.

![image](https://github.com/ankurcyb/AWS-Serverless-computing/assets/141453942/b936e798-c321-4497-993d-5e58aacaf61c)


6. Creating an Amazon DynamoDB table:
In this step we will create a DynamoDB table in which we add our recipe name and method through JSON. Using DynamoDB we can retrieve the data quickly and with reliability.

![image](https://github.com/ankurcyb/AWS-Serverless-computing/assets/141453942/480343a2-de7c-438a-b4c0-8f46cf228925)


