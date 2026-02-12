---
title: "Switching to Linux: How I learned to love the Penguin"
description: "Breaking up with OneDrive and being Bourne-Again"
pubDate: 2026-02-12
tags: ["meta", "linux", "penguin"]
---

## 2019: The First Attempt

My first real foray into Linux was in 2019. In late 2019 I wanted to try out coding. The Odin Project and Harvard's CS50 course were my first guides into programming. I partitioned my laptop with Windows and Linux, that alone took hours, but felt like a massive achievement. I think I coded the classic hello world in Python, but for some reason failed to make the leap to recreating Google's homepage in HTML and CSS. Life happened and I closed the laptop.

## Tuesday: The Switch

Fast forward a few years and this week my coworkers and I are moving from one Azure tenant to another. On Tuesday, Sam, the security lead gave us a few options. Toss everything I deemed important into OneDrive and cross fingers that Microsoft held me in good hands, reformat my drive and boot up a fresh Windows machine to be managed by the new tenant, or reformat my drive with Linux and enjoy the world free of Windows based vulnerabilities and the pain that is Docker Desktop.

I plugged in a mysterious hard drive with unknown contents, don't worry, I didn't find it on the ground outside. The stick had a fresh copy of [Omarchy](https://omarchy.org/). After my first initial log in and boot up (with both my wireless keyboard and mouse plugged in) Sam slid over to my desk and started trying to fix my monitors. I've got two landscape monitors and one portrait monitor that I previously had managed with Fancy Zones. After five minutes and a few LLM queries we had everything flipped, positioned, and refreshing correctly. Going from a mildly intuitive GUI in Fancy Zones to modifying text files by hand had me second guessing my choice to escape the chains of PowerShell.

I spent the day learning shortcuts, cloning repos, installing tools, basically just getting back to where I was Monday morning. I felt a bit more confident as the day went on, but didn't feel like I was the 10x CLI hyper productive warrior developer I have in mind when I think of developers working on Linux. I spent three years developing software on Windows just fine, but the more time I've spent with Docker, Terraform, pipelines, and other Linux native environments the more friction I felt. I will admit most of my terminal time is going back and forth with Claude Code. 

After three years of developing, I've learned that when I feel in over my head the best method to feel grounded is going back to the basics. The rest of the afternoon I spent picking apart the layers of abstractions. I learned about Arch, the difference between a shell and a terminal, and Bourne-Again Shell. I always knew that I was missing out, but `git add -A; git commit -m "add tests"; git pull; git push;` worked well enough.

## Wednesday: Back to Work

Wednesday was back to work as usual, but luckily enough moving tenants gave me the ample opportunity to optimize our IaC and pipelines. Turns out being halfway decent in the terminal can make ripping through `terraform` and `az` commands a breeze. I would be remiss not to give a shout out to Mitchell Hashimoto for blessing me with both Ghostty and Terraform. 

## Today: Getting Comfortable

Today I spent more time practicing in the terminal between workflow deployments and build errors. I learned about aliases and ThePrimeagen himself would be proud that I modified my `.bashrc` with Neovim, that being said I'm still a Visual Studio Code fan, but with a bit more `code .` in my life. Then I learned about Wayland, Hyprland, and the Waybar. Turns out adding a weather widget to what was formerly known as my "Start Bar" is creating a script with Claude and fine tuning it. Changing the color and appearance of the widget? CSS, hey I know that. 

I still like design and I'm glad the world isn't just CLIs, but I'd be lying if I didn't feel more efficient this week. I'd like to thank David Hansson for Omarchy (I missed the boat on Ruby on Rails) and Sam for my open source baptism.