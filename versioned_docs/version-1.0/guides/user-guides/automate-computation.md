---
title: Automate Computation 
description: Register Slack Hooks
sidebar_position: 3
hide_table_of_contents: false
---

# Automate Computation

This guide will help you manage and automate various computations and notifications for your courses and projects using the Bluejay TPA Manager.

## Accessing Bluejay TPA Manager

First, navigate to [Bluejay TPA Manager](https://tpa-manager.bluejay.governify.io/) or your specific implementation (https://tpa-manager[BLUEJAY_SERVICES_PREFIX][BLUEJAY_DNS_SUFFIX]). This platform allows you to manage and automate computations and notifications effectively.

## Managing Calculations in the Course Browser Page

To manage calculations, navigate to the course management page. On this page, you will see a list of courses, each with gray info buttons and action buttons. Projects are listed below their respective courses, indented, and also have their own info and action buttons. The following image illustrates the layout of the course management page:
<img alt="course action buttons" src="/img/guides/automate-computation/course-action-buttons.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

### Info Buttons

Info buttons are displayed in gray and provide access to useful information such as the TPA, dashboard, or GitHub repository for a project.

### Action Buttons

Action buttons allow you to enable or disable specific actions. Currently, the available actions are:
- **TPA Calculation**: Schedules periodic (every hour) calculations of TPA adherence for a team.
- **Email**: Schedules an email with the results, typically sent once per day.
- **Slack**: Schedules a Slack message with the results, typically sent once per day.

### Course Action Button

The course action button enables or disables all action buttons for projects within the course. There are four possible states:
- **Disabled (Gray)**: No projects are available.
- **Red**: No project has this function active.
- **Orange**: Some projects have this function active.
- **Green**: All projects have this function active.

### Project Action Button

The project action button enables or disables the action for a specific project. The states are:
- **Disabled (Gray)**: The action cannot be performed (no TPA, email, or Slack available).
- **Red**: The action is turned off.
- **Green**: The action is scheduled.

### Course Settings for Calculations

Each course has settings for calculations. By default, calculations are turned off and will be executed until seven months after the course creation date. These settings can be edited on the course management page by clicking the edit button for a course, which opens a popup as shown in the following image:
<img alt="course edit calculation" src="/img/guides/automate-computation/course-edit-calculation.png" width="90%" style={{ boxShadow: "0 0 0 0.1px black" }} />
&nbsp;

The settings include:
- **Autorun Option**: Automatically turns on calculations for each new team that joins via the join page.
- **Initial Time**: Specifies when TPA calculations should start, which can be set to a future date.
- **End Time**: Specifies when calculations should stop, even if toggled on.

### Notifications

Notifications can be configured by clicking the notification button (a bell icon). Here, you can edit intervals and specify admin emails/notifications.





