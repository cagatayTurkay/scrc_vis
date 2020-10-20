###### tags: `SCRC` `project-diary`


# SCRC Project Diary - 5


*Updates and thinking on and from 2020.10.19*

After a longish break, we are now working with data from two scenario runs with data that is simulated on 10.09.2020. Here is an overview:

> Please find attached output for two scenarios, no contact tracing (scenario 0) and contact tracing with a blanket isolation of 14-days from time of alert (scenario 1a).
> - I used the same seed to run both scenarios
> - the contacts input file is the usual 'contacts_covid_model.csv'
> - Population size is 20,000 and 1,000 infections are randomly generated at the beginning of the simulation
> - random infection rate has been set to 0
> - all links are traced (no 'skipping' of links)
> - isolation and reporting compliance is set to 100%
> - time steps are now doubles and should match between the infection map and the events file




| Policy ID | Chain Size Distributions | Generation time distributions |
| -------- | -------- | -------- |
| Policy - 0     | ![](https://i.imgur.com/j53kOHc.png) | ![](https://i.imgur.com/UHpMlr4.png)|
| Policy - 1a     | ![](https://i.imgur.com/axisipa.png) | ![](https://i.imgur.com/6ix5eND.png) |

And here is how the stats are looking for these two simulations, not much difference overall:

|policy |	meanCompSizes |	maxCompSizes |	skewCompSizes	| meanGenerationTime |
| -------- | -------- | -------- | -------- | -------- |
| output1a	| 23.092405	| 274	| 3.474408	| 6.543093 |
| output0	| 23.538560	| 278	| 3.525913	| 6.54896 |
