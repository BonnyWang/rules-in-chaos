<template>
    
    <span id="CV" >
        <div class="CVSec">
        <!-- <a id="DownloadCV" href="/CV_Bonny-Y-Wang.pdf" download="CV_Bonny-Wang.pdf">Download the Full CV</a> -->
        <br>
        <br>
        <a id="DownloadCV" href="https://scholar.google.com/citations?user=gR4oz6sAAAAJ&hl=en">Google Scholar</a>
        <h1> Short CV : </h1>
        <h1 class="CVTitle" >Bonny Y. Wang (Yue Wang)</h1>
        
        <p>Email: <a style="color: cadetblue;" href="mailto:bonnyw@uchicago.edu">bonnyw@uchicago.edu</a></p>

        
        <h2 class="CVTitle" >Research Interests</h2>
        <p>Data-driven astrophysics, computational astrophysics, cosmology</p>
        
        <h2 class="CVTitle" >Educations</h2>
        <ul>
            <li id="CVList"><strong>University of Chicago, Chicago, IL</strong><br>PhD in Astronomy & Astrophysics, 2025 - Present</li>
            <li id="CVList"><strong>Carnegie Mellon University, Pittsburgh, PA</strong><br>Master of Entertainment Technology, 2023 - 2025</li>
            <li id="CVList"><strong>The Cooper Union, New York, NY</strong><br>Master of Engineering, Electrical Engineering (Computer Engineering Track), 2022 - 2023<br>Bachelor of Engineering, Electrical Engineering (Computer Engineering Track), 2018 - 2022</li>
        </ul>

        <h2 class="CVTitle">Research Experiences</h2>
        <ul>
            <li id="CVList"><strong>The McWilliams Center for Cosmology & Astrophysics</strong>, Pittsburgh, US<br>Research Assistant, Feb 2024 - May 2025</li>
            <li id="CVList"><strong>Kavli Institute for the Physics and Mathematics of the Universe</strong>, Kashiwa, Japan<br>Visiting Researcher, Jun 2024 - Aug 2024</li>
            <li id="CVList"><strong>The Center for Computational Astrophysics, The Flatiron Institute</strong>, New York, US<br>Guest Researcher, Sep 2022 - Mar 2024</li>
        </ul>
        
        <h2 class="CVTitle">Publications</h2>
        
        <ul>
            <li id="CVList"><strong>Set-based Implicit Likelihood Inference of Galaxy Cluster Mass</strong> <br>Sotlight talk at ICML-colocated ML4Astro 2025 workshop, Jul 2025<br>Bonny Y. Wang, Leander Thiele</li>
            <li id="CVList"><strong>Gravitational Waves from Massive Black Hole Mergers in ASTRID: Predictions for LISA</strong> <br>Accepted in The Astrophysical Journal, Sep 2025<br>Bonny Y. Wang, Yihao Zhou, William Chen, Nianyi Chen, Tiziana Di Matteo, Rupert Croft, Simeon Bird, Yueying Ni</li>
            <li id="CVList"><strong>Cosmology from one galaxy in a void?</strong> | Citations: 6<br>Published in The Astrophysical Journal Letters, July 2024<br>Bonny Y. Wang, Alice Pisani</li>
            <li id="CVList"><strong>Machine-learning cosmology from void properties</strong> | Citations: 11<br>Published in The Astrophysical Journal, Sep 2023<br>Bonny Y. Wang, Alice Pisani, Francisco Villaescusa-Navarro, Benjamin D. Wandelt</li>
            <li id="CVList"><strong>Confined tumbling state as the origin of the excess of slowly rotating asteroids</strong><br>Accepted by Nature Astronomy, Sep 2024<br>Wen-Han Zhou, Patrick Michel, Marco Delbo, Wenchao Wang, Bonny Y. Wang, Josef Durech, Josef Hanu</li>
            <li id="CVList"><strong>Introducing the DREAMS Project: DaRk mattEr and Astrophysics with Machine learning and Simulations</strong> <br>Submitted to The Astrophysical Journal, Sep 2024<br>Jonah C. Rose, Paul Torrey, Francisco Villaescusa-Navarro, Mariangela Lisanti, ... Bonny Y. Wang, et al.</li>
        </ul>

        <h2 class="CVTitle">Teaching Experiences</h2>
        <ul>
            <li id="CVList"><strong>Entertainment Technology Center - Carnegie Mellon University</strong>, Pittsburgh, US<br>Lead Tech Teaching Assistant, Sep 2024 - Present</li>
            <li id="CVList"><strong>Coding Girls</strong>, Shanghai, China<br>Programming Teacher, ML Speaker, Aug 2019</li>
            <li id="CVList"><strong>Aid Education, Liang Zhai</strong>, Shanghai, China<br>Volunteer Teacher, Jun - Jul 2018</li>
        </ul>

        <h2 class="CVTitle">Other Experiences</h2>
        <ul>
            <li id="CVList"><strong>The Cooper Union Satellite Launch Initiative</strong>, New York, US<br>Co-founder, Board Member, Payload Subleader, Sep 2022 - May 2023<br>Proposed Cooper Instrument payload mission; presented weekly research materials; organized a DART mission watch party.</li>
            <li id="CVList"><strong>Origin Space</strong>, Beijing, China<br>Game Development Intern, Jun 2021 - Aug 2021<br>Created SpacePersona game; designed satellite data web interface for Yangwang-1; initiated AI collaboration between rct AI and Origin Space.</li>
            <li id="CVList"><strong>PhotonLab</strong>, Shanghai, China<br>Software Engineer Intern, Jun 2019 - Aug 2019<br>Developed Android app for smart lighting system; built back-end database with Firebase.</li>
            <li id="CVList"><strong>TEDxNingbo</strong>, Ningbo, China<br>Co-curator, Host, Tech Advisor, Translator, Jun 2016 - Jan 2020<br>Co-curated annual conferences; recruited tech speakers; translated documents and lectures between Chinese and English.</li>
        </ul>
   
        <h2 class="CVTitle">Outreach</h2>
        <ul>
            <li id="CVList"><strong>Scientific Visualization</strong>, Technical Artist, Aug 2021 - Present<br>Created visualizations for astronomical research; works mentioned by Scientific American Magazine and displayed at The Flatiron Institute.</li>
            <li id="CVList"><strong>Educational VR Experience for NASA’s VIPER Mission</strong>, Co-Producer, Programmer, Jan 2024 - May 2024<br>Completed prototype game for VIPER exploration journey; helped secure NASA STEM education grant for Moonshot Museum.</li>
        </ul>
        
        <!-- <embed src="/CV_Bonny-Y-Wang.pdf" type="application/pdf" width="100%" height="100%" /> -->
        </div>
    </span>
</template>

<script>
export default {
    name:"CV",
}
</script>

<style>
#CV{
   
    height: 80%;
    overflow-y: scroll;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.349);
    
}

.CVSec{
    /* margin-top: 30px; */
    height: -webkit-fill-available;
    padding-top: 20px;
}


#CVList{
    margin-top: 0px;
    margin-bottom: 10px;
    display: inline-block;
    width: 100%;
    /* override margin */
    margin: 0;
    padding: 0;
    padding-top: 10px;
}

.CVTitle{
    font-weight: bold;
    color: red;
    margin-bottom: 0px;
}

strong{
    font-weight: bolder;
}
#DownloadCV{
    font-size: 25px;
    color: rgb(255, 174, 0);
    text-decoration: none;
    font-weight: 900;
    padding: 5px;
    border:  2px solid rgb(255, 174, 0);
    margin-top: 10px;
    
}

#DownloadCV:hover{
    border: 4px solid rgb(255, 174, 0);
    /* font-weight: bolder; */
    /* text-decoration: underline; */
}

@media only screen and (max-width: 1000px) {
    .CVSec{
        margin-top: 8% !important;
        height: -webkit-fill-available;
        overflow-y: scroll;
        background-color: rgba(0, 0, 0, 0.349);


    }

    #CV{
        background-color: transparent;
    }
}

</style>