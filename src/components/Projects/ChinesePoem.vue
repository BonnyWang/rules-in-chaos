<template>
    <span class="projectContent">
        <h1 class="projectTitle">
            AI for Writing Chinese Poems from the Tang Dynasty
        </h1>
        <h2 class="projectSubTitle">
            Tensorflow RNN with GRU 
        </h2>
        <p>
            The dataset for this project is obtained from https://github.com/chinese-poetry/chinese-poetry. In the JSON folder, Poet.tang.0.json, Poet.tang.1000.json, Poet.tang.2000.json, Poet.tang.3000.json are arbitrarily selected to be the datasets of the project.

        </p>
        <p>
            Datasets are splitted into batches of size 64.In each batch, there is a pair of sequence of length 100 with one character shifted function as the input and the target(prediction).Since the task is generating text. There is no need for a testing dataset. However, the start phrase is chosen to be ‘title’ based on the format of the dataset and anticipated format of the result. 

        </p>
        <p>
            As a person who did not have too much in depth knowledge in Chinese poetry from the Tang dynasty, the result looks decent to me. Some of the sentences sound like a real poem. It also figured out the author correctly. Since the title and the name of the author have more clear patterns, the results for these two parts are generally reasonable. Most of the author names generated are actual authors instead of a random name. Most of the titles are also similar to an actual title or is an existing title.<br>
            <br>
            However, there are more problems in the paragraphs part. Usually, if most other sentences have the same size, there should not be an exception. We can see several outputs have different sizes for sentences. The last poem of the sample output also have “paragraphs:張說” followed by “paragraphs:” which is clearly not right. It could be inferred that the correct new line character is not generated and the “張” is a very typical last name so instead of paragraph, the author name is generated.

        </p>
        <p>
           Sample Outputs:
        </p>
        <p>
            title:橫吹曲辭 巫山高<br>
            authors:杜甫<br>
            paragraphs:<br>
            幽州意氣箕山坂，戰子三蕃阻鼠鞭。<br>
            躍壁月中不改，金事不齊身。<br>
            草木相微滿畫堂，繡蒿金縷繡林塘。<br>
            琱青綺閣揖如已，一時榮落自君心。<br>
            專詔燕樓崇已識，城梁和洗絕氛租。<br>

            <br>

            title:橫吹曲辭 驄馬千堆<br>
            authors:郭震<br>
            paragraphs:<br>
            隴火無氣色，山空髮盤乾。<br>
            深沈不可巡，知食不能聽。<br>
            
            <br>
            
            title:相和歌辭 大歌辭 鳳吹曲<br>
            authors:沈佺期<br>
            paragraphs:張說<br>
            paragraphs:<br>
            鴛鴦夜白水驚碧，噴潤清笳簇金樞。<br>
            綺房鶴容如不息，幽源今萬旗列出。<br>

        </p>
        
    </span>
  
</template>

<script>
export default {
    name:"ChinesePoem"

}
</script>

<style>
    
</style>