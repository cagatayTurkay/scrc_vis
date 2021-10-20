import define1 from "./02a4320e0e6cbe73@363.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["image.png",new URL("./files/ae028f5776f275234ea22dac8854801c7c8ecafc7d051558a94cd75ab0fe5a3ef979aa6732e6d95c7917cbfcf5bd3d5f86c34a9db42d818fdbbeab5dd715acda",import.meta.url)],["image@1.png",new URL("./files/4708c152325e948efe67862e1cc7e7663375bc18530abe49028e80c991cacf3d4213f7041bc7dd74e004e026eaf651342a7a72a35849b8c3f7dc0093bd9643a4",import.meta.url)],["image@2.png",new URL("./files/fbbbbf241187ee837fcbb66e67e4f24f1a0368f12da5415062eeacd420312dc43059618f4909ddf14f0a53fcd412bd3f95ca3cdf5cb9b80f7b24dae534a2c852",import.meta.url)],["image@7.png",new URL("./files/824cf21e8de97a1a6fb839a2b646b9c9525799f074a6c97925ada5a705e98b11bdf93f854df27ca728384c7022256cc6e7396ce618f99118a5c2c4fc849c24aa",import.meta.url)],["image@8.png",new URL("./files/fef77b86b9004e9b797c3ebbe0aae2ffc70c6c9304f7aadcfb4c965d8c8517a52aeb921498a91a71cb5078375d17747a03d135de1a0ae6600dc071e36fca36b6",import.meta.url)],["image@9.png",new URL("./files/c144d157bbcf80c8594d123e105495d11256f62cfd443bb2eb79a61cd1b70a7471e536b6684c6244c4ca79cd9611fd2a2ee27c9a9c3a57efef85dfcbd4da360e",import.meta.url)],["image@10.png",new URL("./files/3090b6fd20f4ce6df87cfae6105bd1ef546b67c038258f3719e1d27d0f04cddb65b1f0bfeb81f960fd873706cf75ca1a919218c6f6093be5d28e0b1b0410f42d",import.meta.url)],["image@11.png",new URL("./files/af5ff6789ac3b99855c8b772da6992bbec8968f53486455d26631da8df30f4342b7d1840e38af71acb4cbec067f04b73596b20fc8f2febcd8c5472e9f1b63d83",import.meta.url)],["image@14.png",new URL("./files/743a394ecd731c3c27a884ee25d10a90b4b942c3d96a5a3de934f7d244b702fac320ebac6e9102efc36b7af4db62263fc0132bd52738b5fc3218aae2813c879a",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# RAMPVIS Idiom : Derived Data Spaces`
)});
  main.variable(observer()).define(["ui","htl"], function(ui,htl)
{
  // If this page is outside of Observable, set the default styles to approximate
  // the appearance of the Observable Look and Feel.
  if (ui === "custom") {
    return htl.html`<style>@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap');

  body {
     font-family: 'Source Serif Pro', serif;
     font-weight: 400;
     line-height: 1.6;
     color: #333;
     padding-left: 2em;
     padding-right: 2em;
  }

  p,div,ul,ol,li {
    max-width: 640px;
  }

  form,table,tr,td,th {
    font-family: sans-serif !important;
    font-size: 9pt !important;
    color: #333;
  }

  table {
    margin-top:0.5em !important;
    margin-bottom:0.5em !important;
  }

  .observablehq .observablehq--inspect {
    display: none;
  }
  </style>
  <pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is an archived version of an Observable Notebook supplement for the RAMPVIS PhilTransA submission titled: </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</br>For the live version, see here: <a href="https://observablehq.com/d/78b20aa4152547e2">https://observablehq.com/d/78b20aa4152547e2</a></pre>`;
  } else {
    return htl.html`<pre style="font-size:8pt; font-style: italic;"><b>Note:</b> This is a live version of this Observable Notebook supplement for the RAMPVIS PhilTransA submission titled </br>"Visualization for Epidemiological Modelling: Challenges, Solutions, Reflections & Recommendations"</pre>`;
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`---
# Introduction`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 1. TASK & USERS - User Story`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- As an epidemiology **researcher/public health expert**
- I would like to:
  - identify regions that follow similar or different trajectories of pandemic evolution 
  - Identify groups of regions with similar trajectories and aim to infer similarities
- so that I can **observe and understand the differences within the progression of the pandemic**
  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 2. DATA`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- As per the core disease indicators, we have daily time-series covering over **1.5 years** for **149 Upper Tier Local Authorities** (UTLA) and for each UTLA, we have 6 time-series on:
  - *cumVaccination* - People who have received vaccinations, by vaccination date, 
  - *CompleteCoverageByVaccinationDatePercentage* - Cumulative percentage of adult population who have received vaccinations, by vaccination date, 
  - *cumVaccinesGivenByPublishDate* - Cumulative number of people who have received vaccinations, by publish date, 
  - *newCasesByPublishDate* - New Daily COVID-19 Cases, by publish date, 
  - *newDeaths28DaysByDeathDate* - New Daily Deaths within 28 Days from a positive COVID-19 test, by death date
  - *newHospitalisations* - New Daily Hospitalisations
- **181 wider determinants of health** per each UTLA from the Public Health Outcomes Framework (https://fingertips.phe.org.uk/profile/public-health-outcomes-framework) , some examples of relevance could be:
  - Inequality in life expectancy at birth
  - Healthy life expectancy at birth
  - Deprivation score (IMD 2019)

The data sources and the data curation process is described here: https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/ClusteringAndImpactAnalysis/data`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In some of the examples, this idiom also makes use of the SCRC's Scottish Health Board level data on cases as can be found here: https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/CorrelationMetrics`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 3. NAME - and description`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Derived data spaces** -- when the number of data entities and/or the features are high, generating visualisations of the data over derived, artificial spaces offer new perspectives where the data could be visualised and analysed. These derived spaces could be lower in dimensionality so the analysis could be carried out more effectively using conventional visualisation techniques that do not need to scale well with high number of features, or the extracted features could be used to extract and quantify inherent characteristics of a data entity. Some widely used examples of these could be the use of dimension reduction techniques, such as PCA, t-SNE or MDS, where each data point is assigned new, derived data features computed by these algorithms through which the data is visualised using more conventional means such as a 2D-scatterplot, revealing structures and relations that are not explicitly visible/observable in the original higher dimensionality. We use such spaces also for parameter space analysis as documented in another [Notebook here](https://observablehq.com/@lborohfang/rampvis-idiom-integrated-algorithmic-tools-for-visual-ana).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 4. ORIGIN & CONTEXT`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`There are many examples of using derived spaces in visualisation. For instance, *derived data spaces* have been used in analysing high-dimensional datasets as in the Dual Analysis Framework by Turkay et al. [1].  In this technique a new derived visualisation space -- called the dimension space -- has been constructed where, instead of the data observations, the data features are the main visual entities. The proposed technique *derives* several measures per each data feature (e.g., variation, information entropy, skewness, etc.) and visualisations such as scatterplots are used where each data point is a data feature within these derived spaces (e.g., a variation vs. skewness scatterplot). The derived data space technique is a versatile approach that has been applied widely to a range of analysis applications where the underlying data carries diverse characteristics, such as a network [2], or a time-series [3]. In the Reducing Snapshots to Points paper, van den Elzen et al. [2] takes a snapshot of a temporal network, represents it as a single data point and projects these representative points to a new derived space where similar states of the underlying network do form similarity structures in this new space. In a similar vein Tam et al. [3] constructs the whole visual analysis approach on a range of *metrics* *derived* from the underlying original time-series in their face recognition application. Their approach reveals many new perspectives where an investigation of the original time-series would be limited.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`___

## 5. EXAMPLES`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`Using a 2-dimensional t-SNE projection to explore a large collection of hand-drawn sketches of various objects within the [Forma Fluens project](http://formafluens.io/index.html#first). The embedding here reveals classes with similar patterns within the drawings of an ambulance by a large group of volunteers.


  <img src="${await FileAttachment(
  "image@8.png"
).url()}" height=450>


In the following eXplainable by Conlen and Hohman ([link](https://idyll.pub/post/visxai-dimensionality-reduction-1dbad0a67a092b007c526a45/)), an interactive projection of images of artworks, enables viewers to "curate" dimensions where the importance of artwork age and brightness in the spatial organisation is altered interactively.

  <img src="${await FileAttachment(
  "image@9.png"
).url()}" height=350>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 6. DESCRIPTION & USE`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`In the case of time series, we extracted features that characterise the time series as well as characterising the relations between them. For instance, we extracted features such as frequency, sinuosity, signal-to-noise ratio as measures to characterise the information captured in a single time-series, and we extracted relational features such as Euclidean distance and/or auto-correlation that depict the similarities and lags between pairs of time-series. 
`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`
## Developing a time-lag-corrected data space for effective time-series comparison

In the following series where we analyse the time-series data in relation to the Scottish Health Boards. The Python code and some narrative that outlines the analysis in the following can be found on this Github repository -- https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/CorrelationMetrics

we start the analysis by making use of the cross-correlation measures within the time-series data. The resulting heatmap which uses the cross-correlation values as the similarity metric reveals relatively higher values of similarity across the health boards. This indicates that there are not many boards showing completely irregular/different behaviour. We are double-encoding the strength of auto-correlation in this heatmap, both by the size of the square and by the colour, this could be considered a redundant use of valuable screen/encoding resource but the added benefit is the over-emphasis of strong/prominent relations. 

<figure class="image">
  <img src="${await FileAttachment(
  "image.png"
).url()}" height=450>
  <figcaption>Cross correlation of Positive cases between Scottish NHS boards for the first wave of covid-19</figcaption>
</figure>

As a more potentially more useful visualisation, we re-order the heatmap and investigate the data here again. This time, we also remove the diagonal to avoid redundancy, i.e., the diagonal is by default the correlation with self.

<figure class="image">
  <img src="${await FileAttachment(
  "image@14.png"
).url()}" height=450>
  <figcaption>Cross correlation of Positive cases between Scottish NHS boards for the first wave of covid-19. Ordered according to an underlying similarity-based clustering (produced later in the notebook).</figcaption>
</figure>

The trusts from Highland to Lothian (a first group) exhibit a strong correlation with other trusts from that group. They correspond to trusts located in Mainland Scotland. The trusts in the group highlighted in green have strong correlation with each other and a weaker correlation with the trusts in the group in red. They are located near the border with England. Trusts in the group in blue have a weak correlation with others. They correspond to the Northern and Western isles.

### Lag Analysis

We then choose two health boards to perform a closer inspection on whether there are any *lags* in how the disease numbers increased/decreased. This could be informative in understanding the spread of the disease, e.g., areas that are hit early due to, for instance, international travel, will show increases early which will then move over to other areas. While such a complex observation is not immediately visible with the visualisations of the raw time-series, performing a lag analysis enables us to *derive a new data space* where we explicitly observe the relations between two time-series with respect to the lag between them. The following figure indicates that there is a 22-day lag between NHS Dumfries and Galloway and NHS Grampian's patterns -- an observation that would require further exploration.

<figure class="image">
  <img src="${await FileAttachment(
  "image@1.png"
).url()}" height=450>
  <figcaption>Plot of the cross-correlation of daily positive cases in function of the time lag for NHS Dumfries and Galloway, and NHS Grampian during the first wave of covid-19: NHS Dumfries and Galloway is behind NHS Grampian by 22 days with a correlation of 78.73%. This lag-graph support the identification of reasonable lags between pairs of time-series but also functions as a tool to support the analysis of auto-correlation relations by revealing/emphasising temporal lags between areas.</figcaption>
</figure>

As a next step of the above lag analysis, one operation here is to modify the time-series so that the lags between the series is controlled for, and the peaks are aligned.  This enables us to perform comparative analysis in a robust and effective way, and enable us to overlay the raw time-series directly. The first figure below shows the two time-series before the lag is taken into account.

<figure class="image">
  <img src="${await FileAttachment(
  "image@2.png"
).url()}" height=450>
  <figcaption>The time-series for NHS Dumfries and Galloway and NHS Grampian for the first wave of the pandemic before the time-lag correction has been applied, i.e., data as it has been observed.</figcaption>
</figure>

While a temporal lag could be seen between the two time-series, a visual comparison is only available here after the time-lag is applied and the time-series are aligned. This new "*lag-corrected-data-space*" enables us to compare the time-series under a more effective lens. In the following, the similarities between the two time-series is clearer and visible.

<figure class="image">
  <img src="${await FileAttachment(
  "image@10.png"
).url()}" height=450>
  <figcaption>Same as above but taking into account the time lag: Shifting the data of NHS Dumfries and Galloway by +22 days</figcaption>
</figure>

We then used the aligned time-series for a clustering of the time-series. The clustering contains four resulting clusters where most of the health boards within the mainland end up in the first cluster indicating similarities, while the isles are distinctively different and end up in their own clusters.

<figure class="image">
  <img src="${await FileAttachment(
  "image@11.png"
).url()}" height=450>
  <figcaption>A clustering of the time-series with the time-lag adjusted data sets. Cluster 1 includes most of the NHS boards in Scotland. There are three other clusters, each made of a single NHS board (Orkney, Western Isles, and Shetland). It shows that the Western and Northern Isles of Scotland exhibit a different pattern from Mainland Scotland.</figcaption>
</figure>
`
)});
  main.variable(observer()).define(["FileAttachment","md"], async function(FileAttachment,md){return(
md`## Deriving proximity as similarity spaces for comparative analysis
In addition to these, we applied projection techniques such as PCA, MDS, t-SNE to project the data to new spaces where similarities could be observed on. The resulting axes of these projection algorithms also serve as derived features where the data could be analysed. This is then possible to cluster time series to identify similarities between times series and highlight outliers.

In the following, we are using the PHE's UTLA level data as described above. The Python code and some narrative that outlines the analysis in the following can be found on this Github repository -- https://github.com/ScottishCovidResponse/scrc-vis-analytical/tree/master/ClusteringAndImpactAnalysis

Our first goal is to derive a new data space where we use high-dimensional similarity measures to construct 2D representations where we can explore the proximities between individual UTLAs. First, we compute a n X n similarity matrix, where n = 149 (the number of UTLAs in the data) using Dynamic Time Warping as the underlying measure -- a technique to measure similarities (distances) between time-series that are not necessarily aligned over time, for instance, because they have different sampling frequencies, or have different acceleration/deceleration moments [4].  

We then make use of that distance matrix to construct a network visualisation where nodes are the UTLAs and edges indicate similarity within the population normalised number of deaths from COVID-19 (by the date of registration within 28 days of a positive test). Here, only the strongest similarities are shown as edges (i.e., UTLAs having a similarity over 0.75 within a 0 - 1.0 range where 1.0 indicates most similar). The visualisation reveals a number of clusters and areas showing strong similarities, such as East Sussex, Norfolk and Kent, and a larger group of UTLAs having similar patterns within the spread of the disease.

<figure class="image">
  <img src="${await FileAttachment(
  "image@7.png"
).url()}" height=450>
  <figcaption>A network of UTLAs where nodes are the UTLAs and edges indicate similarity within the population normalised number of deaths from COVID-19 (by the date of registration within 28 days of a positive test). </figcaption>
</figure>

These above are only some examples of using derived spaces for constructing visualisations that reveal and highlight new perspectives that are not possible with only using the raw data elements.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## 7. REFLECTION`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.0 Reflective Discussion  `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Derived data spaces work as an idiom that brings together **computation**, **creative design thinking** and **visualisation** to address the challenges faced when working with large and complex analytical problems. Designing an effective data space requires us to think deeply on both about the tasks/user stories, i.e., what does the user want to know, and on the computational techniques/algorithms that we can draw upon from, i.e., how can I compute new "*data*" that makes it more effective/robust/immediate to respond to the analytical task at hand. 
- While visualisation design is often referred to as a human-centred design activity, we would like to argue that the data derivation for developing new abstract spaces for exploration is also an inherently human-centred design activity. Developing appropriate spaces forces us to think both about the user needs/tasks but also requires us to engage deeply with the literature on techniques that are traditionally seen as data or method oriented, such as statistics, data mining or machine learning. Derived data spaces puts the designers in this interdisciplinary area where critical reflection on the intersection at what is needed by the users/analytical tasks and what the computational techniques afford.
- Developing new metric spaces requires significant software development for data processing, wrangling and analysis. In that respect, making use of established libraries and packages that provide computational processes off-the-shelf become highly critical.
- In most cases, a lot of time is spent just to wrangle the data and compute new data features, while the required visualisation design/development work could be minimal. For instance, in the case of PCA/MDS projections, bulk of the work is in getting the data in shape and projecting to a new 2-dimensional space while the visualisation is a simple scatterplot. This lack of novelty in the design could be underwhelming for both the designers and viewers. However, the value in such views is not necessarily in the design itself but more in the narrative and the interpretation. Therefore clear annotations and a strong narrative to explain what the new derived data surfaces becomes highly critical. The *design effort here shifts from the visualisation design to more the narrative design*, i.e., contextualising and explaining what is seen in this novel, derived space, and what it enables us to see that was not possible before.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.1 What Worked`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Created novel views to the data that reveal structures that are not inherently available in the data, e.g., network of regions where edges are distances -- this reveal relations and structures not easily visible within the raw data.
- Pairwise similarity measures enabled us to explore areas showing similar/dissimilar patterns through representations such as heatmaps and network diagrams
- Analysis such as lag-based corrections (as described above), transforms the data in ways that is highly challenging to do cognitively for viewers of visualisations, e.g., aligning time-series with respect to their lags. Such operations enabled us to make use of conventional visualisations in ways that reveal relations much more effectively and more suited to the analytical tasks, e.g., using a line chart where the peaks are aligned by the time lags enables the direct, visual comparison of time-series, taking the cognitive effort off from the viewers and embedding it within the computations
- Availability of codebases and libraries made it straightforward to increase the number of derived features
- Framing the design of derived data spaces as a creative and generative activity enabled us to be more adventurous and explorative in approaching the idiom -- at some point we saw this activity as a **idea generation lab** -- what are some computational tools that we can throw at this data that might give us new lenses to look at.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.2 What Didn't Work`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`From our (designers/developers) perspective, here are a few things that didn't work:
- Not having regular access to epidemiologists to derive/inform some of the decisions made with the data derivation, making this overall activity more of an exploration, anticipatory design process (i.e., where the framing to see this activity as an idea generation lab as discussed above came from).
- Different libraries for deriving data needs different data representations and make assumptions about the underlying characteristics of the data, e.g., assumptions of normality in dimension reduction methods. A lot of time needs to be spent with background work to get the data in shape and format needed. There is a lot of **invisible background work** that could be easily under-appreciated, which could be a factor that is demotivating for the designers.
  - One (as a visualisation designer) can do a lot of work on the data and spend ages getting some algorithms to work but the result is sometimes a simple scatterplot, this could be underwhelming from a design creativity perspective, or presenting the results to an audience that would appreciate novel designs/solutions. It is, however, important to appreciate the value of the analysis and narrative in these cases.
  
Hard to tell from the epidemiologists'/users' perspective what didn't work as this is still in progress, but here are some anticipated challenges:
- Unfamiliarity (within epidemiologists) with the abstract spaces/representations that rely on derived data
- Unfamiliarity (within epidemiologists) with the derived features themselves`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.3 Recommendations & Opportunities`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Focus on developing data processing and wrangling early on. Have flexible routines that can be easily adapted for different needs of the libraries required
- User requirements/tasks are extremely critical also for data derivation tasks -- aim for developing a series of tasks/goals/needs that will guide thinking and development.
- Identify a range of computational libraries early on and explore as you go along. Knowing what is possible computationally helps shape the design thinking process `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### 7.4 Who Was Involved?
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`- Radu, Cagatay, Franck, Hui, Alma, Phong, Tuna
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## 8. REFERENCES`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`[1] Turkay, C., Filzmoser, P. and Hauser, H., 2011. Brushing dimensions-a dual visual analysis model for high-dimensional data. IEEE transactions on visualization and computer graphics, 17(12), pp.2591-2599.

[2] van den Elzen, S., Holten, D., Blaas, J. and van Wijk, J.J., 2015. Reducing snapshots to points: A visual analytics approach to dynamic network exploration. IEEE transactions on visualization and computer graphics, 22(1), pp.1-10.

[3] Tam, G.K., Fang, H., Aubrey, A.J., Grant, P.W., Rosin, P.L., Marshall, D. and Chen, M., 2011, June. Visualization of time‐series data in parameter space for understanding facial dynamics. In Computer Graphics Forum (Vol. 30, No. 3, pp. 901-910). Oxford, UK: Blackwell Publishing Ltd.

[4] Berndt, D.J. and Clifford, J., 1994, July. Using dynamic time warping to find patterns in time series. In KDD workshop (Vol. 10, No. 16, pp. 359-370)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Imports`
)});
  const child1 = runtime.module(define1);
  main.import("ui", child1);
  return main;
}
