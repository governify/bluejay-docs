---
title: Using Slack Hooks
description: Register Slack Hooks
sidebar_position: 4 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Using Slack Hooks

---

:::warning
This functionality is being migrated to the TPA-Manager, a new frontend for Bluejay. See [TPA-Manager documentation](../../development/bluejay-only-services/tpa-manager.md).
:::

BLUEJAY has the capability to **send reports to a Slack channel** via a Slack webhook. To activate the slack notifications for a course, navigate to de desired course using the dropdown at ***ui.bluejay.[YourDomain]*** . You must click the ***Load Course*** button.

<img alt="course selector" src="/img/guides/slack/courseSelector.png" width="80%"/>

<br></br>

Once you select the desired course, you can see two notification panels
[Admin Notifications Panel](#admin-notifications-panel)
and
[Student Notifications Panel](#students-notifications-panel). If you do not have any team joined please read [Register new Teams](register-new-teams.md).

<img alt="slack panel" src="/img/guides/slack/slackPanel.png" width="80%"/>
&nbsp;

## Admin Notifications Panel

---
This panel manages the reports of all groups to the admin slack channel.

<img alt="adm panel" src="/img/guides/slack/slack-adm-panel.png" width="80%"/>

**Please follow these steps** to make it work:

1.  **Insert the Slack webhook** and **click Set**. Here is the [slack guide to create a webhook](https://api.slack.com/messaging/webhooks) for a channel.
2.  **Choose the frecuency** of notifications and **click Set**.

   :::info bear in mind
      - The first message will arrive after the time you selected. Then it will repeat at that frequency.
      - You can choose Continuously (8 seconds) the first time to check that the system is working.
   :::

3.  **Press the Toggle Button**. This will enable notifications to the admin for current joined groups. If a new group joins later, just deactivate and activate the notifications again. Now you shold see a Slack logo next to the projects where admin notifications are active.

<img alt="active adm notification" src="/img/guides/slack/active-adm-slack.png" width="80%"/>

## Students Notifications Panel

---
This panel manages individual reports sent to each team. It is important to note that all teams should have their Slack webhook configured in their [info.yml](/guides/user-guides/register-new-teams).
The top panel toggles all notifications for each group. However, you can toggle each group independently (right switch button).

<img alt="students panel" src="/img/guides/slack/slack-student-panel.png" width="80%"/>
&nbsp;

:::info bear in mind

- If a team does not have the info.yml configured, you can not activate their notifications.
- Whenever you toggle the notifications, it utilizes the frequency set at that particular moment.
:::

---
