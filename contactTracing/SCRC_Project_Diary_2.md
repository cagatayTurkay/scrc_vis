# SCRC Project Diary -2

*2020.07.06*  

## Enriching graphs further with disease status and location information

*Updates and thinking on 2020.07.06* 
The goal here is to associate the state transition related information and location information to the nodes in the infection map. Some important questions to look into here are:

- What is the state of an individual when they are infecting another individual?
  - There are two ways of surfacing this information. Let’s assume that A infected three others, B, C, D. A → [B, C, D]. It is possible that all these infections could have happened at different states. So it does makes sense to associate this information to the edge.
  - Potentially, this can be an information associated with a particular node, for instance, what is the most frequent state that a node infect others. This could be something to use as part of the graph based visualisations where we filter/colour by node
- What is the location of infections? This is again similar to above. Let’s start with associating this information to the edges.

When all of these data sources are integrated, we are looking at some stats such as these:

Here are all the “states” of those infection sources. From these numbers, it looks like the   `asymptomatic` cases are causing the highest number of infections, followed by the pre-symptomatic cases

![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594068054280_image.png)


And let’s have a look at the `locations` of the the infections. A few locations stand out, such as *schools* , *restaurants*, and *small family* settings.


![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594067940373_image.png)


Now all these data is embedded within the graphs, let’s see if there is anything interesting to look at within the graphs.

| Only infections happening in school                          | Infections happening School, Restaurants and Small Family Settings | Looking at the 30 largest chains and colouring according to infection locations |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594070017028_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594069968532_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071195445_image.png) |
| [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/FullInfection_School.pdf)] | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594069730905_image.png) [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/FullInfection_School-Resturant-SmallFamily.pdf)] | [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/30TopComp_School-Resturant-SmallFamily.pdf)] |

And a closer look at some of the chains

| Here is a school cluster leading to infections at different locations |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071486838_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071702490_image.png) |

And now let’s look at the disease states of those who are infecting others. Since each individual can be at a different stage when it comes to infecting others, we are colouring the edges

| Infections caused by **Asymptomatic** nodes                  | Infections caused by nodes at their Symptomatic and Pre-Sympotmatic stages |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071314701_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071416571_image.png) |
| [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/30TopComp_Asymptomatic.pdf)] | [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/30TopComp_Symptomatic.pdf)] |



## Incorporating Derived Data on the Graph

**Generation times —** One idea that was suggested by Louise was to use the `generation times` to colour the nodes. `generation time` is the average time that it takes an infected individual to infect all the others that they’ve infected. So if the average time is low, it means that it took the infections a very short time to occur. The following graph is coloured according to generation time. We are looking at the 10 largest components from the infection map. 


> Darker means very short infection times. Size is mapped to `outDegree`, i.e., how many infections a node has been the source of. What this means is that if a node is large and big, we are looking at several infections happening in short time — this is what one might call **super-spreaders**?


![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593811108996_image.png)


And then if we look at the distribution of generation times, we see a distribution that looks like this. For most nodes, the generation times are between 1 to 10. 

![mean = 6.523527, std = 2.866262, min = 2.0, max = 24.0](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594031800496_image.png)

## 