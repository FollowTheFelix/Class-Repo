<img src="https://i.imgur.com/QgojyYY.png" width="400">

# Project 3<br>Build a Full-stack Django App as a Team

### Overview

You’ve already worked in small groups to accomplish various labs and exercises, but this time **we’re going to challenge you to work in a small team on a project.**

You and your teammates together will architect, design, and collaboratively build a full-stack web app.

With this project you'll be building an exciting full-stack app that uses the **Python**-based **Django Web Framework**.

**This project will push you both technically and collaboratively!**

You'll likely be working as part of a team in the workplace and **this project will provide you with that important team development experience.**

However, **working on a project as part of a team can be more challenging** due to logistical reasons, differing opinions, etc.

During this project, **your instructors are going to be evaluating your ability to**:

- Listen to and respect other opinions
- Share and contribute your ideas with the team
- Form a consensus and compromise when opinions differ

### In fact, **your ability to work in a team during this project is more important than the project itself!**

---

## Planning & Presentation Requirements

### Planning:

Working in a team is going to require more upfront planning to ensure the team is "on the same page"...

#### Trello Board Planning - Links Due **\_\_\_\_**

- A **[Trello](https://trello.com/) board** with:

  ☐ **User Stories**, each moving from left to right in the following
  three lists in your board:<br> - **Ice Box**<br> - **Current/MVP**<br> - **Completed**<br>
  <br>**User Stories** must follow the following template:<br>**_As a \<user role\>, I want \<feature\>, because \<reason\>._**<br>The _reason_ is optional if it's blatantly obvious.

  ☐ **Wireframes of the main pages of functionality**, e.g. Landing Page, Posts Index Page, Favorite Posts Page, Add Post Page, etc.

  ☐ An **ERD** showing the attributes of each entity and the relationships between them. Refer to the Data Modeling lesson for assistance.

### Project Presentations - Due **\_\_\_\_**

**Your entire team must participate in the presentation of the project.**

You will have approximately 15 minutes to present your project following these guidelines:

1. **Introduce the Project:**

   ☐ Intro your project by paraphrasing the README.

2. **Demonstrate the Project:**

   ☐ Launch the project by clicking the link in the README.

   ☐ Sign up a new user, then immediately log out.

   ☐ Log in with your preferred user and demonstrate the features of the app.

   ☐ Be sure to demo the qualifying CRUD data operations.

3. **Show/discuss your code:**

   ☐ Show the "main" Django model.

   ☐ Show the code for the main model's view.

   ☐ Show your favorite Django template.

4. **Share the experience:**

   ☐ What was your biggest challenge? (besides Team Git Workflow)

   ☐ What are your key learnings/takeaways?

5. **Q & A + Feedback**

---

## Project Workflow: Implementing User Stories

1. After all of the user stories that you can think of are defined in the Ice Box list, prioritize them your with your "wish list" items at the bottom.

2. After the prioritization, move the user stories for the MVP to the Current/MVP list. FYI, the MVP (Minimum Viable Product) in this case consists of the minimal user stories that will result in the project requirements being fulfilled.

3. After the user story at the top of the Current/MVP list is implemented, move it to the Completed list.

4. When there are no more user stories in the Current/MVP list - focus on ensuring that the app's features look polished!

5. After the MVP's features look great and if time permits, the user story from the top of the Ice Box list may be implemented. Ensure that each Ice Box user story's feature is polished before moving on to another user story in the Ice Box.

---

## Technical Requirements

### Your App Must:

☐ Be a full-stack **Django** application.

☐ Connect to and perform data operations on a **PostgreSQL** database (the default SQLLite3 database is not acceptable).

☐ If consuming an API (OPTIONAL), have at least **one data entity** (Model) in addition to the built-in User model. The related entity can be either a **one-to-many (1:M) or a many-to-many (M:M)** relationship.

☐ If not consuming an API, have at least **two data entities** (Models) in addition to the built-in User model. It is preferable to have at least **one one-to-many (1:M) and one many-to-many (M:M)** relationship between entities/models.

☐ Have **full-CRUD data operations** across any combination of the app's models (excluding the User model). For example, creating/reading/updating posts and creating/deleting comments qualifies as full-CRUD data operations.

☐ **Authenticate users using Django's built-in authentication**.

☐ **Implement authorization by restricting access to the Creation, Updating & Deletion of data resources** using the `login_required` decorator in the case of view functions; or, in the case of class-based views, inheriting from the `LoginRequiredMixin` class.

☐ Be **deployed online** using **Heroku**. Presentations must use the deployed application.

#### The app may optionally:

☐ Upload images to AWS S3

☐ Consume an API (installation of the [Requests package](https://docs.python-requests.org/en/latest/user/quickstart/) will be necessary)

### Other Requirements:

☐ Your team must **manage team contributions and collaboration** using Git/GitHub team work-flow. Here are some references:

- [Team Workflow Video](https://www.youtube.com/watch?v=oFYyTZwMyAg)
- [Cheat Sheet in Class Repo](https://git.generalassemb.ly/SEI-Standard-Curriculum/seir-09-26-22)
- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)

☐ All team members need to have significant contributions to the project via git commits.

##### A `README.md` file with these sections (here's a [basic template](https://gist.github.com/SpideyFanDan/7bb81919616abb4a0f6c5d787ee84a1c)):

☐ **App Title:** Contains a description of what the app does and optional background info.

☐ **Screenshot(s):** A screenshot of your app's landing page and any other screenshots of interest.

☐ **Technologies Used**: List of the technologies used.

☐ **Getting Started**: That Includes:

- A link to the **deployed app** (Heroku)
- A link to the **Trello board** used for the project's planning that includes user stories, wireframes & an ERD.
- A link to the **pitch-deck**.

☐ **Next Steps**: Planned future enhancements (icebox items).

> Note: Don't underestimate the value of a well crafted `README.md`. The `README.md` introduces your project to prospective employers and forms their first impression of your work!

---

## Suggestions for Success

1. **Use [Mob Programming](https://en.wikipedia.org/wiki/Mob_programming)** where the team is always developing together on a single computer. Read [this post](http://underthehood.meltwater.com/blog/2016/06/01/mob-programming/) for more information. **All students will get more out of the project by following Mob Programming!** Be sure to rotate who the driver is (typing the code) frequently so that every team member makes commits on the project.

2. **Identify roles** on the team, which may be:

   - **GitHub Manager (required role)**: the primary person for "owning"/managing the repo and GitHub team workflow (merging pull requests, etc.).
   - **Scrum Master**: the leader of the Agile processes (user stories, stand-ups, etc.) and manager of Trello.
   - **Documenter**: the person in charge of the README, etc.
   - **Designer**: the person in charge of UI design/layout (wireframes) and styling.
   - **Database manager**: this person will be in charge of creating and managing the models.

   Other than the **GitHub Manager**, you _don't have to formally fulfill any of the other roles!_ They are only listed to provide ideas/guidance.

3. After starting the project, creating/connecting to the database and creating the `main_app` and its `urls.py`, implement authentication and a dynamic nav bar.

4. For help with implementing a feature, review the relevant lesson(s), read the docs, then Google only if necessary.

5. **Be consistent with your code style.** You have multiple developers in your team writing code, but you only have one app per team. Make sure it looks like a unified effort in regards to formatting, etc. For example, consistent vertical whitespace between functions.

6. Do your best to have only one dev working on a certain file between commits. This will avoid merge conflicts. This is another reason to use Mob Programming!

7. **Commit early, commit often.**

---

## Obtaining Assistance from an Instructor

- Although your kind instructors will be available to assist during project time, the amount of assistance you require is expected to be minimal due to the fact that you will be collaborating as a team regularly.

- **All requests for assistance should be slacked to the class `support` channel, not individual instructors**. This approach will provide the best and quickest response for your team, as well as be helpful to other teams that may be faced with the same issue.

---

## Project Feedback + Evaluation

- Your instructors will be using the [Project 3 Code Review](./project-3-code-review.pdf) form to determine whether or not the project passes all of the minimum requirements. (Please ignore the Pitch Deck requirement).
- If your instructors determine that your project would pass with minor fixes, you will be required to address the minor deficiencies by 9 am the following day of class. Please be sure to inform your local instructor when the fixes are complete. FYI, "minor fixes" are minor items that can be fixed very quickly, like code formatting, correcting the README, etc.
- If your instructors determine that the project does not meet the minimum requirements you may request to address the deficiencies identified and resubmit the project. However, be aware that **there is only a single opportunity to resubmit a project or project assessment during the course**.
- If there is a specific section of code that you would like an instructor to provide additional feedback, please ask!

---
