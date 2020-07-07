# SCRC Project Diary

# 2020.07.02 - Coding day - 2 

This is the second iteration of my coding journey with the SCRC project. The last time, I looked into the `infectionMap.txt` alone which look like these:


    13(0)         ->  [15(5)]
                  ->  15(5)          ->  [14(8), 9100(14), 4217(16), 8133(18)]
                             ->  9100(14)       ->  [3993(24)]

and produced these graphics:

| ![](https://paper-attachments.dropbox.com/s_C73B9C180848F3D32D299F28C3C48A732D439727E03428FAF11E31CB867AAFD9_1593030430433_image.png) | ![](https://paper-attachments.dropbox.com/s_C73B9C180848F3D32D299F28C3C48A732D439727E03428FAF11E31CB867AAFD9_1593030635112_image.png) | ![](https://paper-attachments.dropbox.com/s_C73B9C180848F3D32D299F28C3C48A732D439727E03428FAF11E31CB867AAFD9_1593030966897_image.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Graph with recurring random infections during the whole simulation [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/FullInfectionMap.pdf)] | Graph with no further random infections once the simulation started. The graphs are now much richer and longer [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/NewInfectionMapExport.pdf)] | An example of the longer chains                              |

    Note: On Gephi, I follow the layout operations as follows:
    - OpenOrd first which deals with the disconnected components nicely
    - Fruchterman Reingold or Yifan Hu for laying them out in a spread
    - And then Noverlap to resolve node overlaps

For the large graph, this is the distribution of components — there are 746 components:

| ![Graph with no further random infections once the simulation started. The graphs are now much richer and longer](https://paper-attachments.dropbox.com/s_C73B9C180848F3D32D299F28C3C48A732D439727E03428FAF11E31CB867AAFD9_1593030635112_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593771939578_image.png) |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Graph with no further random infections once the simulation started. The graphs are now much richer and longer [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/NewInfectionMapExport.pdf)] |                                                              |


We also got a new Infection Map today with data containing locations. I gave that a try as well, there are 2108 components:


| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593772516492_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593771392620_image.png) |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                       |                                                                                                                                       |


And here are the three largest 3 and 10 components from this graph:

| **Largest 3 components**                                                                                                              | **Largest 10 components**                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593773720283_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593774750450_image.png) |

**Combining location data with Components (Discussions with Daniel)**
Thinking on Component Selections and Associating them to locations — some strategies to decide on the category that a component belongs to:

- **1-edge:** if you have one infection in place X, then you are labelled as X (good for overlapping assignments)
- **Plurality:** The most common location category is the assigned overall category
- **Majority:** Only label a component if a particular location has “majority” 

**Incorporating Derived Data on the Graph**

**Generation times —** One idea that was suggested by Louise was to use the `generation times` to colour the nodes. `generation time` is the average time that it takes an infected individual to infect all the others that they’ve infected. So if the average time is low, it means that it took the infections a very short time to occur. The following graph is coloured according to generation time. We are looking at the 10 largest components from the infection map. 


> Darker means very short infection times. Size is mapped to `outDegree`, i.e., how many infections a node has been the source of. What this means is that if a node is large and big, we are looking at several infections happening in short time — this is what one might call **super-spreaders**?


![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593811108996_image.png)


And then if we look at the distribution of generation times, we see a distribution that looks like this. For most nodes, the generation times are between 1 to 10. An important note here is that 

![mean = 6.523527, std = 2.866262, min = 2.0, max = 24.0](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594031800496_image.png)

## Additional Data — Inputs, Intermediate logs, etc.

Exploring the new datasets now that we got recently. These are pretty rich but one can only insert so much data on a graph. One idea is to go into connected multiple views where details are revealed in facets but that’s still an engineering question.

## Events

`events.csv` which looks like this:


    time","eventType","id","newStatus","additionalInfo"
    0,"InfectionEvent",2048,"EXPOSED","This case was an initial infection"
    0,"InfectionEvent",4101,"EXPOSED","This case was an initial infection"

where there are three different types of `events` : *InfectionEvent*,  *VirusEvent*, *AlertEvent*

and the status changes follow the `compartment` structure that the underlying model follows. Here are the states, I guess these are what an epidemiologist will call compartments:


    array(['EXPOSED', 'ASYMPTOMATIC', 'PRESYMPTOMATIC', 'RECOVERED',
           'SYMPTOMATIC', 'REQUESTED_TEST', 'SEVERELY_SYMPTOMATIC',
           'AWAITING_RESULT', 'ALERTED', 'TESTED_POSITIVE', 'TESTED_NEGATIVE',
           'NONE', 'DEAD'], dtype=object)

**Note**: Correction — some of these are compartments but some of them are about events, such as testing, etc.

| **Frequency of different infection events**                                                                                           | **Frequency of different individual events**                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593704222425_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593704251694_image.png) |

**Timeline Stories** 
There is an interesting timeline/story element to the data in this file. For instance, I’m tracing the “story” of node 15 which got infected by node 13 (first line in the infection map file):


    6,"InfectionEvent",15,"EXPOSED","This case was due to contact with 13 at time = 5"
    7,"VirusEvent",15,"PRESYMPTOMATIC","Old Status : EXPOSED"
    11,"VirusEvent",15,"SYMPTOMATIC","Old Status : PRESYMPTOMATIC"
    12,"AlertEvent",15,"REQUESTED_TEST",""
    13,"VirusEvent",15,"SEVERELY_SYMPTOMATIC","Old Status : SYMPTOMATIC"
    14,"AlertEvent",15,"AWAITING_RESULT",""
    14,"AlertEvent",15,"TESTED_POSITIVE",""
    18,"VirusEvent",15,"DEAD","Old Status : SEVERELY_SYMPTOMATIC"

Things didn’t end well for 15.. 


    A question -- this seems like an error or a glitch:
    There are nodes which are exposed twice
    9,"InfectionEvent",2,"EXPOSED","This case was due to contact with 18 at time = 8"
    9,"InfectionEvent",2,"EXPOSED","This case was due to contact with 2815 at time = 8"

The question here is whether there is an opportunity to reveal these timelines here? Does the timeline of a single individual matter? Probably not. So my guess is that an aggregation here would work pretty well. So I would like to think about a design on: 


> An aggregation on how the agents are changing states and their aggregate journeys through the states.

One idea could be to bin these events in terms of the `transition types`. The model description on the github page tells me that:


> It comprises of S-E1-E2-Iasymp-Isymp-Isev-D-R disease progression compartments


![S – Susceptible – the default condition E1 – Exposed, but not infectious E2 – Exposed, infectious, but not detectable by a test Ia – Infected and asymptomatic, will test positive Is – Infected and symptomatic, will test positive R – Recovered D – Dead](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593708151730_image.png)


Which means there are transitions such as:


    EXPOSED - PRESYMPTOMATIC
    EXPOSED - ASYMPTOMATIC
    PRESYMPTOMATIC - SYMPTOMATIC
    SYMPTOMATIC - SEVERELY_SYMPTOMATIC
    SYMPTOMATIC - RECOVERED
    SEVERELY_SYMPTOMATIC - DEAD
    SEVERELY_SYMPTOMATIC - RECOVERED
    ASYMPTOMATIC - RECOVERED

Thinking more about these and playing around with the data, the most useful statistics about these are captured by the output with the compartment values over time. This is what epidemiologists always look at through these SEIR graphs: 

![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593784880152_image.png)


I did a small design spin on those and produced the SEIR lines as a heatmap where each compartment is a “row” over the y-axis:

![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593784538127_image.png)


and only looking at symptom related series:

![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593784723941_image.png)

## Contacts

`contacts.csv` which looks like:


    time,from,to,weight,label
    0,14298,14357,100,Restaurant
    0,425,6831,100,School
    0,301,15510,100,ConstructionSite

with the following location labels:


    array(['Restaurant', 'School', 'ConstructionSite', 'Shop',
           'LargeManyAdultFamily', 'Office', 'CovidHospital', 'LargeAdult',
           'AdultPensioner', 'SmallAdult', 'SmallFamily', 'Hospital',
           'LargeTwoAdultFamily', 'Nursery', 'DoubleOlder', 'CareHome',
           'SingleParent', 'SingleAdult', 'SingleOlder'], dtype=object)
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1593701233258_image.png) | OK, there seems to be some expected numbers here. With `school` being the most with `small family` following.<br><br>There seems to be `20000 individuals` and `8.846.925 contact events` in this data. |

----------
## Enriching graphs further with state and location information

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

| Here is a school cluster leading to infections at different locations                                                                 |                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071486838_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071702490_image.png) |

And now let’s look at the disease states of those who are infecting others. Since each individual can be at a different stage when it comes to infecting others, we are colouring the edges

| Infections caused by **Asymptomatic** nodes                  | Infections caused by nodes at their Symptomatic and Pre-Sympotmatic stages |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071314701_image.png) | ![](https://paper-attachments.dropbox.com/s_C6E8C0FCB1B16DEE7594A2F1F9B7CE4516FE4FACF347C06F062E142B646BB744_1594071416571_image.png) |
| [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/30TopComp_Asymptomatic.pdf)] | [[high-res pdf](https://github.com/ScottishCovidResponse/scrc-vis-modelling/blob/master/ContactTracing/GraphVisualisation/StaticInfectionMaps/Outputs/30TopComp_Symptomatic.pdf)] |


