---
title: Tests are a form of documentation
publish_date: 2022-09-03
---

Tests show how the code is supposed to work. Tests show the expected output. Tests show the expected behaviour. Tests show the expected state of the system. Tests show the expected state of the data. Tests show the expected state of the environment. Tests are always an up-to-date form of documentation.

A while ago, my team was tasked with owning a legacy service. Unfortunately, this legacy service had 0 documentation, and the previous owners all left.

Luckily the first few tickets that required making changes to the service were minimal, and a deep dive understanding of the codebase was unnecessary. Then more significant requirements started coming in, building new features that required understanding both the ingress and egress of the service. With no documentation or knowledge of how the service was created, tests saved us. Reading the tests showed us the data flow from the initial request to the final output. It also gave us a good idea of what corner cases to look out for.

Now imagine if we were in a place with no documentation AND no tests. The only way to get around something like this is by adding a bunch of logs and then reading through them. This is a very time-consuming process, and it is not guaranteed that you will be able to understand the service. You could use breakpoints, but that is not a scalable solution in a repo with ~10000x lines of code and ~1000x files.

Remember, next time you are writing tests, someone in the future will be reading your test to understand the system and help piece together the puzzle. Tests == documentation.
