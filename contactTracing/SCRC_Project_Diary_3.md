###### tags: `SCRC` `project-diary`


# SCRC Project Diary -3


*2020.07.06*  

## Fixing infection sources statistics

This was something we found to be problematic earlier at the 2020.07.17 meeting. And was reported on Diary-2 [here](https://cagatayturkay.github.io/scrc_vis/contactTracing/SCRC_Project_Diary_2.html). So here is how the updated stat looks like:

Here were all the “states” of those infection sources in the earlier report.

![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594068054280_image.png)

> Something unusual with the above is the `DEAD` and `RECOVERED` infecting others. This is due to the agents changing states on the same time-stamp. An update here reveals the following:
> 

Still, the asymptomatics are the most prevelant infection sources, followed by those who are pre-symptomatic.

![](https://i.imgur.com/qz6DaW3.png)

## Comparative Visualisations 

*Updates and thinking on and from 2020.07.21* 

We now received a large collection of scenarios each corresponding to a particular contact tracing policy. We have about 10 runs at this stage described in this document [https://github.com/ScottishCovidResponse/Contact-Tracing-Model/blob/develop/docs/Contact_tracing_model_overview_updated_020720.md].

There are a few key questions that I'll try to look into. But on the whole, they all boil down to this question:

> How do the different contact tracing scenarios affect the progression of the disease?
> 

This is the most important objective, but let's break down what comparison means and how we can approach that, there are many ways we can *compare*:

**C1:** How do the infection chains differ (under the different scenarios)?
- **C1_1:** Can we demonstrate a few infection chains that are markedly different as a result of the applied policies? 
- **C1_1:** How do the number of components differ across the runs?

**C2**: How do the SEIR values differ?


### Some characteristics of the simulation runs

- All the different runs are seeded with the same set of random infections
- All the infections occur accordingly to the same input contact matrix 
- Depending on the policies, the individual chains look different. However, we expect “infectionMap_0.txt” to have the largest chains.
- We should be able to use “infectionMap_0.txt” as the basis for comparison.
- The infections chains would not necessarily compose of similar individuals, so we need ways to find "consistent" chains to compare against within the simualtions.

### Some strategies for the analysis

- Choose the top thirty seed nodes from the *no_policy* simulation. But what does the top thirty means?
  - Shall we look at the most "sociable" seed agents in the input data?
  
  
## First comparison views for the runs

I start with computing the `chain sizes` and the `generation times`. These were helpful in the earlier sprint.

For all the scenarios, I generated the graphs, looked into the seperate infection chains and computed some basic stats from them. These are how the different statistics vary over the different policies:


| Average Infection Chain Size  | Maximum Infection Chain Sizes | Average Generation Times |
| -------- | -------- | -------- |
| ![](https://i.imgur.com/TJ2Cjyp.png)    | ![](https://i.imgur.com/7FX7ilZ.png)     | ![](https://i.imgur.com/ahNOqZ4.png) |

One observation from the above is that the minimal level of changes across the different policies. For some reason, some policies are even leading to larger chains as opposed to the benchmark simulation `Policy-0`. Most marked reduction is on `Policy-1e` and `Policy-4`. I wonder whether we will need multiple runs of these policies to be able to make inferences on the policy impacts?

## Exploring changes within the infection characteristics

Let's compare a few policies and see if the `sources` of infections are changing. I want to compare two scenarios here: the baseline `Policy-0` and most promising two `Policy-1e` and `Policy-4`:

![](https://i.imgur.com/H3iJMLU.png)

![](https://i.imgur.com/I418AQL.png)

![](https://i.imgur.com/n1907ZL.png)


# Appendix

Here is an appendix with all the policy-level statistics.

|  Policy | Chain Sizes  | Generation Times  | 
|---|---|---|
|  0 |![](https://i.imgur.com/TbpEadR.png) | ![](https://i.imgur.com/gyTDF41.png)  | 
|  1a | ![](https://i.imgur.com/hNeYgaC.png)  |  ![](https://i.imgur.com/eWG0fe7.png) | 
| 1b  |  ![](https://i.imgur.com/ibqSNSa.png) | ![](https://i.imgur.com/SJw6c0x.png)  | 
| 1c_0days  | ![](https://i.imgur.com/D3qhlSS.png)| ![](https://i.imgur.com/Klf7aa9.png) |
| 1c_1days | ![](https://i.imgur.com/OlRCRAh.png)  | ![](https://i.imgur.com/JSyKEzN.png) |
| 1c_2days  | ![](https://i.imgur.com/9PDSYv1.png)|  ![](https://i.imgur.com/jQJl5Xg.png) |
| 1c_3days  |  ![](https://i.imgur.com/t7bxkUz.png)|  ![](https://i.imgur.com/gEZqox7.png) |
| 1c_4days  | ![](https://i.imgur.com/79X3rPu.png)  | ![](https://i.imgur.com/HPTkfqX.png)  |
| 1c_5days  | ![](https://i.imgur.com/2CSxwaU.png)  | ![](https://i.imgur.com/Pr2SDTT.png) |
| 1c_6days  | ![](https://i.imgur.com/DqFywDb.png)  |  ![](https://i.imgur.com/dAZAA22.png) |
| 1c_7days  | ![](https://i.imgur.com/PcDBOuL.png)  |  ![](https://i.imgur.com/lFKtLT4.png) |
| 1c_8days  | ![](https://i.imgur.com/7lZCgLn.png)  | ![](https://i.imgur.com/XSZyXb2.png)  |
| 1c_9days  |  ![](https://i.imgur.com/A0ZJWwN.png) | ![](https://i.imgur.com/G1otV1I.png)  |
| 1c_10days | ![](https://i.imgur.com/WweDJQx.png)  | ![](https://i.imgur.com/0ZK9qOu.png)  |
| 1c_11days  | ![](https://i.imgur.com/z7r9c9C.png)  | ![](https://i.imgur.com/l2aupBV.png) |
| 1c_12days  |  ![](https://i.imgur.com/iV525O1.png) | ![](https://i.imgur.com/y3I9182.png)  |
| 1c_13days  | ![](https://i.imgur.com/PhOORBl.png)  |  ![](https://i.imgur.com/c91FxJH.png) |
| 1c_14days  | ![](https://i.imgur.com/sV2oCw4.png)  | ![](https://i.imgur.com/m2IRbcG.png)  |
| 1d  | ![](https://i.imgur.com/hMXF3TC.png)  | ![](https://i.imgur.com/OIIXOqR.png)  |
|  1e | ![](https://i.imgur.com/AJWmErL.png)  | ![](https://i.imgur.com/vUOJBXy.png)  |
| 2b  | ![](https://i.imgur.com/vW5VOt9.png)  | ![](https://i.imgur.com/InbiUSD.png)  |
|  3 | ![](https://i.imgur.com/1RL1wUt.png)  |  ![](https://i.imgur.com/pbdjjIg.png) |
| 4  | ![](https://i.imgur.com/ripretQ.png)  | ![](https://i.imgur.com/5H6IqT8.png) |
|   |   |   |


And here are the statistics as a reference:

![](https://i.imgur.com/IF0oTLU.png)
