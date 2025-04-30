---
title: Add new course
description: How to add a new course to the platform using TPA Manager
sidebar_position: 1 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Add a new course with TPA Manager

---
This tutorial is designed to guide users through the process of creating a new course in the TPA Manager and subsequently joining a team [Register new Teams](register-new-teams.md). The tutorial is presented in a step-by-step format, ensuring that users can easily follow the instructions and complete the process effectively.

:::warning
This service is in rapid development. New features may be added or differ from this guide.
:::

:::info bear in mind

   - Before starting the tutorial, it's important to note that a valid authorization is required to use some features.

   - If you are in the development environment, the correct authorization depends on where the [Scopes Manager service](https://docs.governify.io/development/services/scopes-manager) is running. On console: `c025ff8502893fc6c5a87cf3febe4882` or docker: `bluejay-scopes-private-key`.

   - If you are in the production environment, the production operator should provide you with the necessary credentials.

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

Once you're in the Templates section, you can save a template by downloading from the [Bluejay Zoo](https://github.com/governify/zoo/tree/main/bluejay/tpa) or creating your own `template.json` and then uploading it.

**Please follow these steps** to create one template:

1.  **Click create from sample**

   <img alt="create template dialog" src="/img/guides/add-new-course/createtemplatedialog.png" width="50%" style={{ boxShadow: "0 0 0 0.1px black" }} />
   &nbsp;

2.  You will see a dialog where you can fill the template id and upload the file.

   :::info bear in mind
      - Tempate id must be in the format `template-<name>-version`
      - Version must be `vX-X-X` where X is a number
      - Example: `template-PSG2-2425-v1-3s-12`
   :::

3.  **Press add Button**. This will create the template and redirect you to the Templates section. The new template will be listed and you will be able to edit and delete it.

   <img alt="template created" src="/img/guides/add-new-course/templatecreated.png" width="80%" style={{ boxShadow: "0 0 0 0.1px black" }} />
   &nbsp;

## Return to Create Course Page and fill the fields

Now that we have a template, we can proceed to fill in the necessary details to create the course. The fields are:

### Required Fields

- `classId`: Course name. Example: `Introduction to Programming`.
- `templateId`: Select the template we just created. Example: `template-PSG2-2425-v1-3s-12`.
- `autoRun`: This option activates automatic TPA calculations for each new team. When a team joins the course on the JOIN page, a TPA will be created, and a task will be scheduled to periodically calculate the team's TPA adherence. Task can be enabled/disabled in the course page. If you prefer to set all courses calculations at once, you can do it later on that page. Example: `false`.
- `hidden`: Option to set whether the course will be hidden or visible. This includes hidden in the **Course Browser Page** (professors) and in the **Join Page** (teams). Example: `false`.

### Optional Fields

- `joinCode`: Code that students will use to enroll in the course. Example: `JOIN2023`.
- `identities`: Additional identity configurations. Example: ``.
- `credentials`: Additional credentials. Example: ``.
- `hideDashboardLink`: A toggle to hide the dashboard link from teams when joining the course. Example: `true`.

All fields can later be edited in the **Course Browser Page** by clicking the **Edit** button of the course.

<img alt="create course" src="/img/guides/add-new-course/createcourse.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

Once you have filled in all the fields, click the **Create** button. If the course is created successfully, you will be redirected to home page and you will see the new course listed.

<img alt="course created" src="/img/guides/add-new-course/coursecreated.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

Now that the course has been created, you can proceed to [Register new Teams](register-new-teams.md) to add teams to the course.
