<template>
  <div class="border border-[#3e4e707d] rounded-md p-3">
    <div class="flex flex-col">
      <div class="flex flex-col lg:my-3">
        <span class="text-2xl font-semibold">Verification</span>
        <span class="text-xs text-[#939393]">Please upload identification document to verify your account.</span>
      </div>
      <form  class="">
        <div class="grid grid-cols-12 gap-2 items-center">
          <div class="col-span-12 md:col-span-6 flex flex-col my-1">
            <label for="firstname" class="font-medium pl-1 text-xs mb-1">First Name</label>
            <input type="text" name="firstname" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full py-3">
          </div>

          <div class="col-span-12 md:col-span-6 flex flex-col my-3">
            <label for="lastname" class="font-medium pl-1 text-xs mb-1">Last Name</label>
            <input type="text" name="lastname" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full py-3">
          </div>
        </div>

        <div class="grid grid-cols-12 gap-2 items-center">
          <div class="col-span-12 md:col-span-6 flex flex-col my-1">
            <label for="firstname" class="font-medium pl-1 text-xs mb-1">Document Type</label>
            <select name="cars" id="cars" class=" border border-1 border-[#939393] bg-transparent rounded-md lg:h-8 w-full text-xs py-1 px-2">
              <option value="volvo" class="text-xs text-[#939393]">national Id</option>
              <option value="saab" class="text-xs text-[#939393]">voter's Id</option>
              <option value="mercedes" class="text-xs text-[#939393]">passport</option>
              <option value="audi" class="text-xs text-[#939393]">driver's license</option>
            </select>
          </div>

          <div class="col-span-12 md:col-span-6 flex flex-col my-3">
            <label for="docnumber" class="font-medium pl-1 text-xs mb-1">Document Number</label>
            <input type="text" name="docnumber" class=" border border-1 border-[#939393] rounded-md lg:h-8 w-full py-3">
          </div>
        </div>

        <div class="border-[3px] border-dotted border-blue-300 bg-blue-100 rounded-md py-12 px-16 md:px-44 xl:px-80">
          <div class="btn flex gap-8 p-3 justify-center bg-[#214BF6] rounded-md cursor-pointer" 
            @click="uploadClicked"
            v-if="!showSelection"
            >
            <input type="file" name="document" ref="docUpload" class="hidden" @change="fileSelected">
            <LazyIconsUploadIcon class="w-4 h-4 text-white" />
            <span class="text-white font-semibold text-xs block">Attach Document</span>
          </div>
          <div class="flex gap-6 items-center" v-else>
            <IconsFileIcon class="w-24 h-24 text-white" />
            <span class="font-medium text-[#939393] text-xl">{{ fileName }}</span>
            <IconsCloseIcon class="w-6 h-6 cursor-pointer" @click="clearFileInput"/>
          </div>
        </div>
        <div class="grid place-items-center my-4">
          <button type="submit" class=" flex gap-3 justify-around p-3 items-center bg-[#214BF6] rounded-md cursor-pointer px-12" @click.prevent="true">
            <span class="text-white font-semibold text-xs block">Submit</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const  showSelection = ref(false)
const fileName = ref("")
const docUpload:Ref<null|HTMLInputElement> = ref(null);

function uploadClicked(){
  console.log(docUpload.value);
  docUpload.value?.click();
}

function fileSelected(){
  let files = docUpload.value?.files;
  console.log(files?files[0]:null);
  fileName.value = files?files[0].name:""
  showSelection.value = true
}

function clearFileInput(){
  docUpload.value = null;
  showSelection.value=false;
}
</script>

<style>

</style>