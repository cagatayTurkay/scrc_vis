###### tags: `SCRC` `project-diary`


# SCRC Project Diary -4


*Updates and thinking on and from 2020.08.19* 

After our last meeting where we found out that there are not notable differences between the different scenarios, we decided to alter some of the parameters and create some baseline scenarios, i.e., edges of the "intervention" spectrum -- from no contact-tracing interventions to most strict interventions. Here is a note on the new set of simulations:

> Please find attached three zipped output folders, output_multiple_scenarios (all scenarios using the same seed), stochastic_output0 (20 simulations of scenario 0), stochastic_output1a (20 simulations of scenario 1a).
> I have been running simulations with the following assumptions:
> - 500 individuals are randomly infected at the beginning of the simulation
> - reporting compliance / isolation compliance are both set to 100 %
> - all contacts are traced (no skipping of links)
> - no random infections
> 
> Note that for scenarios that account for releasing negative contacts (2b / 3) the stats.txt output is not correct yet, as we did not subtract those individuals that were released from isolation. 
> Primary and secondary contact tracing is indicated in the name of the output as '_tracingLevel1' or '_tracingLevel2' respectively.
> For scenario 4 simulations were also run for different delays between reporting symptoms and test result.