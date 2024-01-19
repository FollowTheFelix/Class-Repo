<img src="https://i.imgur.com/XseXU8J.png" width="900">

# Welcome to General Assembly SEB!

This will be your shared class repo! Guides, in-class labs and code samples, and other resources will live here.

### Contents

- Course Dates and Holidays
- Link to Zoom Room
- Course Curriculum
- Instructional Team / Contact Info
- Link to Deliverable Schedule
- Class Repository Structure
- Becoming Familiar With the SEB GitHub Workflow
- Daily JavaScript Code Challenges
- Additional Coding Practice Resources
- Immersive Graduation Requirements

### Course Dates and Holidays

- Course duration: September 25th - December 21st
- Holidays:
  - November 10th
  - November 22nd - 24th

### Link to Zoom Room

[Link to join the Zoom Room](https://generalassembly.zoom.us/j/96577718284?pwd=UGdlZk5oQ3JId2pCdHZ6VjRlVEhXUT09)

### Course Curriculum

> The following is an overall schedule and is subject to change.

<table>
  <thead>
    <tr><th>Unit</th><th>Week</th><th>Topics</th><th>Project</th></tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Fundamentals of Front-end Development</td>
      <td align="center">1</td>
      <td>Fundamentals of JavaScript, HTML & CSS<br>DOM Manipulation & Events<br>Structuring a Browser App</td>
      <td rowspan="3">Browser-based Game</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td>CSS: Flexbox, Grid & Responsive Design<br>JS: Callback functions, Classes, jQuery, this Keyword, Array Iterator Methods & Playing Audio</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to GitHub Pages</td>
    </tr>
    <tr>
      <td rowspan="3">Full-stack Development</td>
      <td align="center">4</td>
      <td>Client-Server: HTTP Communications & REST<br>NodeJS & ExpressJS Framework<br>MongoDB & MongooseJS ODM<br>Data Modeling</td>
      <td rowspan="3">MEN-stack CRUD Application</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td>Consuming & Producing APIs<br>Authentication using OAuth<br>AJAX<br>Regular Expressions</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
    <tr>
      <td rowspan="3">Second Language & Web Framework</td>
      <td align="center">7</td>
      <td>Relational Databases & SQL<br>Fundamentals of Python<br>CS Topics</td>
      <td rowspan="3">Group Project: Full-stack Django Application</td>
    </tr>
    <tr>
      <td align="center">8</td>
      <td>Django Web Framework<br>Uploading Files to Amazon S3<br>Username/Password Authentication</td>
    </tr>
    <tr>
      <td align="center">9</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
    <tr>
      <td rowspan="3">Developing Single-page Apps</td>
      <td align="center">10</td>
      <td>SPA Architecture<br>ReactJS Library<br>Client-side Routing (React)</td>
      <td rowspan="3">MERN-stack Application</td>
    </tr>
    <tr>
      <td align="center">11</td>
      <td>Web Sockets<br>Full-stack React<br>Token-based Authentication</td>
    </tr>
    <tr>
      <td align="center">12</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
  </tbody>
</table>

### Instructional Team Contact Information

<table>
  <tr>
    <th> Role </th><th> Name </th> <th>Slack </th> <th>Email </th>
  </tr>
  <tr>
  <td> Lead Instructor </td> <td> David Bland </td><td> @David Bland </td><td> david.bland@generalassemb.ly </td>
  </tr>
  <tr>
  <td> Instructional Associate </td> <td> Keith Baskerville </td><td> @Keith(Ohz) </td><td> keith.baskerville@generalassemb.ly </td>
  </tr>
</table>

#### Cloning Your Copy of the Repository Locally

Now that you have a copy of the class repo in your GitHub account, it's time to bring the contents of that repo onto your computer - this process is known as **cloning** and it only needs to be done once:

1. On your GitHub account, browse to your GitHub class repo and under the repository name click `Clone or download`
2. In the `Clone with HTTPS` section, click the clipboard to copy the URL for the repository.
3. Open Terminal and navigate to your `~/code` folder - you may choose a different folder if you wish, however these instructions will assume you clone the repo into a folder named `code`.
4. In Terminal, type `git clone ` and follow it by pasting in the copied URL from the clipboard. The command should now look something like this:

```
$ git clone https://github.com/general-assembly-sei/SEB-1-22
```

You can now `$ cd SEB-1-22` and check out your local copy of of the GA class repo!

<!-- #### Adding a git _remote_ for the original GA class repo

A repo on your computer is called a **local repo** ("repo" is short for repository).

Repos on GitHub are called **remote** repos. Think of them as repos in the cloud.

When you cloned your fork of the repo, a "link" to the git **remote** was automatically created. You can check which remotes exist for a given local repo using this command:

```
$ git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is named **origin**.

However, in order to get the updates that the instructors push to the GA class repo, you will need to create another **remote** that points to GA's class repo that you forked:

```
$ git remote add upstream https://github.com/general-assembly-sei/SEB-1-22.git
```

Note that by convention, the remote that points to the _original_ GitHub repo that was forked is named **upstream**.

Entering `$ git remote -v` again will show that you now have two remotes: `origin` (your fork of GA's class repo) and `upstream` (GA's class repo). -->

#### Getting Changes Pushed by Your Instructors

Each day (maybe a few times a day), instructional materials may be pushed to the class repo by your instructors. You will want to "pull" these materials into your local repo (on your computer). Doing so will enable you to access "starter code", etc.

First, if you've made any changes **within** the repo locally, i.e., you've modified some starter code, you will need to **commit** those changes first:

```
$ git add -A
$ git commit -m "Add amazing work..."
```

With local changes committed, you can now fetch the updates from the Github class repo and merge them into your **local** repo (on your computer):

```
$ git pull
```

<!-- From time to time, you will want to "save" the commits you have made locally to your forked GitHub class repo (in the cloud). Doing so is a good idea to ensure your work is backed up to the cloud in case of computer failure:

```
$ git push origin master
```

The above Git/GitHub workflow is summarized by this diagram:

<img src="https://i.imgur.com/w871ATo.png">
-->

#### Git Merge Conflicts

A **merge conflict** occurs when git merges two commits that have modified the same region of code and can't figure out whose code to use. Thus, fixing merge conflicts requires that a developer manually update the code to what it should be and re-commit it to resolve the conflict, which will also finish git's merge process.

Git informs you which files have merge conflicts and will _annotate_ your code to show you how your local code differs from the code being merged from the remote. An example of such annotation is below.

```
'<<<<<<< HEAD
// Local code is here
=======
// Changes you are pulling are here
>>>>>>> 75c37cea922afc56e7d686adba063b986013ca9f
```

Once you have resolved these merge conflicts by editing the code and removing the markers, you can `add` and `commit` normally.

During group project merge conflicts will likely occur giving you an opportunity to learn more about them then.

#### Important

**"Nested" repos are never permitted**. Therefore, if you have important code, such as your projects, that belongs in its own repo, **be sure to put that code in folders outside of the class repo**.

### Additional Coding Practice Resources

If/when you find yourself with extra time, look into these external resources:

- [Codewars](https://www.codewars.com/)
- [LeetCode](https://www.leetcode.com/)
- [CodeSignal](https://codesignal.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Advent of Code](https://adventofcode.com/)

### GA SEB Graduation Requirements

General Assembly's courses are pass/fail programs. We have certain requirements in order to be considered a graduate of the SEB program:

- No more than 3 days absent from class over the duration of the course (3 tardies equals 1 absence)
- Successful completion of four assigned projects.
- You have one retake for a project if your project didn't meet the requirments for a passing grade.
- No violation of GA's zero tolerance plagiarism policy.
- Participating in GA’s mid-course and end-of-course feedback surveys
- Complete 80% of assigned "deliverables"

When you complete our program with passing status, you unlock our alumni perks:

- Support from the Outcomes Team, including participation in the Meet & Greet event (with prospective employers).
- Receive a GA Letter of Completion (via email 1 week after graduation)
- Credits and discounts for other GA courses (check with Student Services for details).
- Access to our Alumni Community

# Welcome!
