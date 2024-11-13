---
layout: post
title: "Scalable Ruby on Rails application"
date: 2021-10-24 08:01:23 +0100
categories: Research
image: /images/20211024/header.jpg
---

During my graduation project I investigated how a new version of Raemonda – an administrative package for financial
service providers – could be developed with better scalability, maintainability and testability. This new version should
better support large customers and improve the performance of the application.

Raemonda, in its current form, has limitations in use with large customers and shows challenges in the area of
scalability and maintainability. The goal of my research was therefore to design a solution that works well for both
small and large customers and that can easily be scaled up as the customer needs grow.

By means of literature research and interviews with end users and customers, I investigated the most suitable
architecture and frontend solutions for Raemonda. A number of interesting findings emerged:

- A multi-tenant architecture turned out to be the best solution to keep the data of customers safely separated, while
  sharing the same server and application.
- For the rights system, RRBAC was recommended, because it fits well with both the structure of large customers and the
  needs of smaller organizations.
- For the frontend I chose the Stimulus JavaScript framework, combined with a component design system, which makes the
  interface testable and dynamic.

With the results from the research I created a design for the new version of Raemonda and developed a prototype to
demonstrate the proposed techniques. This prototype can serve as a basis for further development and gives an idea of
how Raemonda can grow in the future.

I am very proud of this project and the positive appreciation I have received for it. My thesis was eventually given a
high grade, a 10, which for me is a nice conclusion to this intensive period. The full report can be found on
the [Saxion knowledgebase](https://hbokennisbank.nl/details/saxion_scripties:73B567CA-CA8B-4C52-94B3F053CC56D829).
