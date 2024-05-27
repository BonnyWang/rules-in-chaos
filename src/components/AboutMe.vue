<template>
    <span id="AboutMe">
        <h3>
            <mark class="red">Name:</mark>
        </h3>
        <h3>
            博尼  (Bonny Y. Wang) / 汪玥 (Yue Wang)
        </h3>
        <h3>
            <mark class="red">Affiliations:</mark> 
        </h3>
        <h3>
            Carnegie Mellon University (Master of Entertainment Technology)
        </h3>
        <h3>
            Center for Computational Astrophysics, Flatiron Institute (Guest Researcher)
        </h3>
        <h3>
            <mark class="red">Current Location:</mark> 
        </h3>
        <h3>
            Pittsburgh, PA
        </h3>

        <br>
        <h3>
           <mark class="red">Contact:</mark>
        </h3>
        <h3 style="color:purple">
           yuew7@andrew.cmu.edu
        </h3>
    </span>
  
</template>

<script>
export default {
    name:"AboutMe"

}
</script>

<style>
#AboutMe{
    margin-top: 100px;
    height: 60%;
    overflow-y: scroll;
}

mark{
    color: red;
    background: none;
    font-size: 20px;
}
</style>