<template>
  <v-card class="overflow-hidden" >
    <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      
      <v-toolbar-title>Title</v-toolbar-title>
      
      <v-spacer></v-spacer>
       <v-toolbar-title>
       <v-btn icon  class="mt-3 mr-4">
        <v-badge bordered  class="green"  :content="0"
        :value="0" overlap offset-x="10" offset-y="10" >
            <v-avatar size="40">
                <v-icon>mdi-basket</v-icon>
            </v-avatar>
        </v-badge>
      </v-btn>
      <v-btn color="success" class="bg-success text-white mt-3 mr-4">
        Login
      </v-btn>
      </v-toolbar-title>
     

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;" :style="{marginTop:'200px'}">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, rem dolor! Aperiam, alias. Porro debitis corporis asperiores eaque incidunt quae voluptas architecto ipsa a non, eligendi dolores culpa consequatur quisquam! lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga culpa blanditiis unde ea et vero provident vel, ut tempore officia quasi quis soluta sequi autem rerum accusantium neque repellendus.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est ea assumenda repellendus amet esse consequatur! Quod doloribus sed, cumque maiores distinctio obcaecati, libero quas blanditiis culpa illo laboriosam nesciunt!</v-container>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  name:"caro"
}
</script>