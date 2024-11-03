---
title: Add new course
description: How to add a new course to the platform using TPA Manager
sidebar_position: 1 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Add a new course with TPA Manager

---
This tutorial is designed to guide users through the process of creating a new course in the TPA Manager and subsequently joining a team [Register new Teams](register-new-teams.md). The tutorial is presented in a step-by-step format, ensuring that users can easily follow the instructions and complete the process effectively.


:::info bear in mind
   - Before starting the tutorial, it's important to note that a valid authorization is required to use some features. 

   - Since we're in the development environment, the correct authorization depends on where is runing the [Scopes Manager service](https://docs.governify.io/development/services/scopes-manager), on console: `c025ff8502893fc6c5a87cf3febe4882` or docker: `bluejay-scopes-private-key`  

   - [How to add the authorization?](/development/bluejay-only-services/tpa-manager#authorization)
:::
## Navegate to create a new course

First of all, being on the TPA Manager, you must navigate to the ***Create Course*** page. You can do this by clicking on the ***New Course*** button.

<img alt="home tpa manager" src="/img/guides/add-new-course/home-tpa-manager.png" width="80%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

<img alt="wrong create course" src="/img/guides/add-new-course/createcoursewrong.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />

&nbsp;

So, when on the **Create Course** page, we can see that if none exist previously, a message will appear indicating that a template needs to be created. We can click the **Create one!** button or go to the templates management section by clicking the button in the top right corner.

## Create Template from sample

<img alt="create template" src="/img/guides/add-new-course/create-template-from-sample.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

Once you're in the Templates section, you can create one using different examples provided from a Bluejay repository.
**Please follow these steps** to create one template:

1.  **Click create from sample** 

<img alt="create template dialog" src="/img/guides/add-new-course/createtemplatedialog.png" width="50%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;


2.  You will see a dialog with the available examples. Choose one and give the template a name.
   
   :::info bear in mind
      - Tempate id must be in the format `template-<name>-version`
   :::
      
3.  **Press add Button**. This will create the template and redirect you to the Templates section. The new template will be listed and you will be able to edit and delete it.

<img alt="template created" src="/img/guides/add-new-course/templatecreated.png" width="80%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

## Return to Create Course Page and fill the fields

Now that we have a template, we can proceed to fill in the necessary details to create the course. The required fields are:

- **classId**: Course name.
- **templateId**: Select the template we just created.
- **autoRun**: Configuration for automatic execution (true/false).
- **hidden**: Option to set whether the course will be hidden or visible.
- **joinCode**: Code that students will use to enroll in the course.
- **identities**: Additional identity configurations (optional).
- **credentials**: Additional credentials (optional).
- **projects**: List of projects where teams will be registered later (empty).

<img alt="create course" src="/img/guides/add-new-course/createcourse.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

Once you have filled in all the fields, click the **Create** button. If the course is created successfully, you will be redirected to home page and you will see the new course listed.

<img alt="course created" src="/img/guides/add-new-course/coursecreated.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;


Now that the course has been created, you can proceed to [Register new Teams](register-new-teams.md) to add teams to the course.