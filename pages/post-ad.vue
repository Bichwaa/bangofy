<template>
  <div class="flex flex-col lg:w-2/3 mx-auto p-3 lg:p-12">
    <h3 class="font-semibold text-xl p-2 my-2">Post Ad </h3>
    <form class="border border-[#3e4e707d] rounded-md p-3 lg:p-12 flex flex-col mx-2">
      <h3 class="font-semibold text-xs my-2">Upload images</h3>
      <input type="file" name="images" multiple ref="imgInput" class="hidden" @change="evaluateActive">
      <div id="img-container" class="flex gap-2 overflow-x-scroll ">
        <div 
          :class="activeImg=='1st'? 'border-2 border-dotted border-[#214bf6] p-4 cursor-pointer':'border-2 border-dotted border-[#939393] p-4'"
          @click="activeImg=='1st'?openFileInput():false"
          >
          <IconsImageIcon class="w-24 h-24" :fill-color="activeImg=='1st'?'#214BF6':'#64748b '" v-if=" activeImg=='1st' && fileNumber==0"/>
          <img :src="firstSource" alt="image here" id="firstImage" width="100" height="100"  class="rounded-md"   v-if=" activeImg!='1st' && fileNumber>0" />
        </div>

        <div 
          :class="activeImg=='2nd'? 'border-2 border-dotted border-[#214bf6] p-4 cursor-pointer':'border-2 border-dotted border-[#939393] p-4'"
          @click="activeImg=='2nd'?openFileInput():false"
          >
          <IconsImageIcon class="w-24 h-24" :fill-color="activeImg=='2nd'?'#214BF6':'#64748b '" v-if="fileNumber<2"/>
          <img :src="secondSource" alt="image here" id="secondImage" width="100" height="100"  class="rounded-md"   v-if="activeImg!='2nd' && fileNumber>=2" />
        </div>

        <div 
          :class="activeImg=='3rd'? 'border-2 border-dotted border-[#214bf6] p-4 cursor-pointer':'border-2 border-dotted border-[#939393] p-4'"
          @click="activeImg=='3rd'?openFileInput():false"
          >
          <IconsImageIcon class="w-24 h-24"   :fill-color="activeImg=='3rd'?'#214BF6':'#64748b '" v-if="fileNumber<3" />
          <img :src="thirdSource" alt="image here" id="thirdImage" width="100" height="100"  class="rounded-md"   v-if="activeImg!='3rd' && fileNumber>=3"/>
        </div>

        <div 
          :class="activeImg=='4th'? 'border-2 border-dotted border-[#214bf6] p-4 cursor-pointer':'border-2 border-dotted border-[#939393] p-4'"
          @click="activeImg=='4th'?openFileInput():false"
          >
          <IconsImageIcon class="w-24 h-24" :fill-color="activeImg=='4th'?'#214BF6':'#64748b '" v-if="fileNumber<4" />
          <img :src="fourthSource" alt="image here" id="fourthImage" width="100" height="100"  class="rounded-md"   v-else v-if="activeImg!='4th' && fileNumber>=4"/>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 flex flex-col my-3">
        <label for="title" class="font-medium pl-1 text-xs mb-1">Title</label>
        <input type="text" name="title" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full">
      </div>

      <div class="grid grid-cols-12 gap-2 items-center">
        <div class="col-span-12 md:col-span-6 flex flex-col my-1">
          <label for="firstname" class="font-medium pl-1 text-xs mb-1">Main category</label>
          <select name="cars" id="cars" class=" border border-1 border-[#939393] bg-white rounded-md lg:h-8 w-full text-xs py-1 px-2 text-gray-700">
            <option value="one" class="text-xs  bg-slate-100">category 1</option>
            <option value="two" class="text-xs  bg-slate-100">category 2</option>
            <option value="three" class="text-xs  bg-slate-100">category 3</option>
            <option value="four" class="text-xs  bg-slate-100">category 4</option>
          </select>
        </div>

        <div class="col-span-12 md:col-span-6 flex flex-col my-1">
          <label for="firstname" class="font-medium pl-1 text-xs mb-1">Subcategory</label>
          <select name="cars" id="cars" class=" border border-1 border-[#939393] bg-transparent rounded-md lg:h-8 w-full text-xs py-1 px-2 text-gray-700">
            <option value="one" class="text-xs  bg-slate-100">subcategory 1</option>
            <option value="two" class="text-xs  bg-slate-100">subcategory 2</option>
            <option value="three" class="text-xs  bg-slate-100">subcategory 3</option>
            <option value="four" class="text-xs  bg-slate-100">subcategory 4</option>
          </select>
        </div>
      </div>

      <div class="flex flex-col my-3">
        <p for="price" class="font-medium pl-1 text-xs mb-1">Item Condition</p>
        <div class="flex items-center gap-8">
          <div class="flex gap-2">
          <input type="radio" checked id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">New</label>
        </div>
        <div class="flex gap-2">
          <input type="radio" id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">Used</label>
        </div>
        </div>
      </div>

      <div class="flex flex-col my-3">
        <label for="description" class="font-medium pl-1 text-xs mb-1">Description</label>
        <textarea name="description" placeholder="add item description" rows="8" cols="50" class=" border border-1 border-[#939393] rounded-md w-full p-2 text-sm"></textarea>
      </div>

      <div class="flex flex-col my-3">
        <label for="price" class="font-medium pl-1 text-xs mb-1">Price</label>
        <input type="text" name="price" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full">
      </div>

      <div class="flex flex-col my-3">
        <p for="price" class="font-medium pl-1 text-xs mb-1">Negotiable</p>
        <div class="flex items-center gap-8">
          <div class="flex gap-2">
          <input type="radio" checked id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">Yes</label>
        </div>
        <div class="flex gap-2">
          <input type="radio" id="html" name="condition" value="New" class=" border border-1 border-[#939393]">
          <label for="html">No</label>
        </div>
        </div>
      </div>

      <div class=" my-3">
        <p class="font-medium pl-1 text-xs mb-1">Select package</p>
        <div class="flex flex-col gap-4 md:flex-row md:gap-8 ">
          <PackageCard/>
          <PackageCard title="Wholesale"/>
          <PackageCard title="Supplier" :is-active="true"/>
        </div>
      </div>

      <button class="rounded-md bg-[#214bf6] w-full text-white py-2 px-4" @click.prevent>Next</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

type ActiveImage = "1st" | "2nd" | "3rd" | "4th" | ''
const imgInput:any = ref(null) //hidden image input
// image sources
const fileNumber = ref(0)
const firstSource = ref("")
const secondSource = ref("")
const thirdSource = ref("")
const fourthSource = ref("")
const activeImg:Ref<ActiveImage> = ref("1st")

function openFileInput(){
    imgInput.value?.click()
}

function changeActiveImg(to:ActiveImage){
    activeImg.value = to;
}

function evaluateActive(){
    fileNumber.value = imgInput.value?.files.length
    let imageUrl1 = '';
    let imageUrl2 = '';
    let imageUrl3 = '';
    let imageUrl4 = '';
    if(fileNumber.value>4){
        window.alert("You can't add more than 4 images")
        throw new Error("File upload limit exceeded")
    }
    let urlCreator = window.URL || window.webkitURL;
    switch (fileNumber.value) {
        case 1:
            activeImg.value = '2nd';
            imageUrl1 = urlCreator.createObjectURL(imgInput.value?.files[0]);
            firstSource.value = imageUrl1
            break;
        case 2:
            activeImg.value = "3rd";
            imageUrl1 = urlCreator.createObjectURL(imgInput.value?.files[0]);
            imageUrl2 = urlCreator.createObjectURL(imgInput.value?.files[1]);
            firstSource.value = imageUrl1
            secondSource.value = imageUrl2
            break;
        case 3:
            activeImg.value = "4th";
            imageUrl1 = urlCreator.createObjectURL(imgInput.value?.files[0]);
            imageUrl2 = urlCreator.createObjectURL(imgInput.value?.files[1]);
            imageUrl3 = urlCreator.createObjectURL(imgInput.value?.files[2]);
            firstSource.value = imageUrl1
            secondSource.value = imageUrl2
            thirdSource.value = imageUrl3
            break;
            case 4:
              activeImg.value = "";
              imageUrl1 = urlCreator.createObjectURL(imgInput.value?.files[0]);
              imageUrl2 = urlCreator.createObjectURL(imgInput.value?.files[1]);
              imageUrl3 = urlCreator.createObjectURL(imgInput.value?.files[2]);
              firstSource.value = imageUrl1
              secondSource.value = imageUrl2
              thirdSource.value = imageUrl3
              fourthSource.value = imageUrl4
        default:
            break;
    }

    

    // if(firstImage!=null){
        
        // firstImage.src = imageUrl
    // }
}

</script>

<style scoped>
 /* Hide scrollbar for Chrome, Safari and Opera */
 #img-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#img-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 

/* select option {
  background: rgba(0, 0, 0, 0.3) !important;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4) !important;
} */
</style>