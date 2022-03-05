<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            Cosmic Voids Research
        </h1>
        <h2 class="projectSubTitle">
            Using Moment Network to Produce Likelihood-Free Inference of Cosmological Parameters Using Cosmic Voids' Properties
        </h2>
        <p style="color:#ff991c">
            Still in Progress...
        </p>
        <p>
            Cosmic voids are the vast spaces between filaments in the universe that contain few or no galaxies. Their unique low-density property makes it easy to  study and predict other hard-to-measure astrophysical parameters which would help scientists better understand the universe.
        </p>
        <p>
            When it comes to processing voids’ data, typical statistical methods require large amounts of computational power. However, with machine learning, acceptable results can be obtained with limited resources and therefore speed up the study of the field. In particular, we found likelihood-free inference to be a promising solution to predict cosmological parameters using different statistics associated with voids like the void size function. 
        </p>
        <p>
            The cosmological parameters we aim to explore are Ω<sub>m</sub>, Ω<sub>b</sub>, h, n<sub>s</sub>, σ<sub>8</sub>, M<sub>ν</sub> and w.
        </p>
        <p>
            Dataset Used: The GIGANTES dataset(Created by running the void finder VIDE QUIJOTE’s halo simulations.)
        </p>
        <p>
            Previous study from Prof. Alice Pisani(We have successfully reproduced the following image):
        </p>
        <img style="width:80%" src="\ImgThumbNail\vsfParameter.jpg">
        <figcaption>https://arxiv.org/pdf/2107.02304.pdf</figcaption>

        <p>
            Currently we want to explore the relationship between the voids' ellip value and cosmological parameters. The following image indicate the relationship between cosmic voids' radius and ellip values.
        </p>
        <img style="width:50%" src="\ImgThumbNail\ellipsevsR.jpg">
        <p>
            The moment network is aim to minimize the loss function:
        </p>
        <img src="\ImgThumbNail\moment.jpg">
        <figcaption>Image Source: https://arxiv.org/pdf/2011.05991.pdf</figcaption>
    </span>
</template>

<script>
export default {
    name:"VoidsResearch"
}
</script>

<style>

</style>