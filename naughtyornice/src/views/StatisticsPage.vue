<template>

    <div class="container-fluid">
<!--7 days visitor trending-->

        <div class="col-md-10 content jumbotron">
          <canvas id="planet-chart"></canvas>
      </div>

<!--full details bubble chart-->

<!--       <div class="col-md-10 content jumbotron">
          <canvas id = "bubble-chart"></canvas>
        </div -->

<!--full details table chart-->

 <div class="col-md-10 row content jumbotron">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Visiting Date</th>
        <th>Nick Name</th>
        <th>Email</th>
        <th>Subject</th>
        <th>Spark</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="p in displayedPosts">
      <td>{{p.first}}</td>
      <td>{{p.second}}</td>
      <td>{{p.third}}</td>
      <td>{{p.fourth}}</td>
      <td>{{p.fifth}}</td>
    </tr>
    </tbody>
  </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
        </li>
        <li class="page-item">
          <button type="button" class="page-link" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
        </li>
        <li class="page-item">
          <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
        </li>
      </ul>
    </nav>
  </div>
    </div>

</template>


<script>
import Chart from 'chart.js';
import ls from '@/utils/localStorage';
import moment from 'moment';
import table_view from '@/views/table';





export default {

name: 'StatisticsPage',
components: {
  table_view,
    },

data () {
      return{
      posts : [''],
      page: 1,
      perPage: 5,
      pages: [],
      day0: 44,
      day1: 64,
      day2: 51,
      day3: 42,
      day4: 38,
      day5: 77,
      day6: 55,
      planetChartData:{
                  type: 'line',
                  data: {
                    labels: [
                    moment().subtract(6, 'days').format('L'),
                    moment().subtract(5, 'days').format('L'),
                    moment().subtract(4, 'days').format('L'),
                    moment().subtract(3, 'days').format('L'),
                    moment().subtract(2, 'days').format('L'),
                    moment().subtract(1, 'days').format('L'),
                    moment().subtract(0, 'days').format('L')],
                    datasets: [
                      { // one line graph
                        label: 'Number of visitors',
                        data: [this.day6, this.day5, this.day4, this.day3, this.day2, this.day1, this.day0],
                        backgroundColor:
                          'rgba(54,73,93,.5)', // Blue
                        borderColor:
                          '#36495d',
                        borderWidth: 3
                      },
                    ]
                  },
                  options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                          padding: 25,
                        }
                      }]
                    },
                    title: {
                          display: true,
                          text: '7 Days Visitors Trending'
                      }
                  }
      },

      bubbleChartData:{
                  type: 'bubble',
          data: {
            labels: "Africa",
            datasets: [
// Json-format example
  // {
  //               label: ["Denmark"],
  //               backgroundColor: "rgba(60,186,159,0.2)",
  //               borderColor: "rgba(60,186,159,1)",
  //               data: [{
  //                 x: 258702,
  //                 y: 7.526,
  //                 r: 10
  //               }]
  //             },
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            }, scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            }
          }

      },

    }
    // end data()
    },

  methods: {

    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      let myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },

    getPosts () {
      let items = [];
      let data = [];

      for(let i = 0; i < localStorage.length-1; i++){
         items = ls.getItem(localStorage.key(i));

            for(let j = 0; j < items.length; j++){
                    this.posts.push(
                          {
                            first: localStorage.key(i),
                            second:items[j].nickname,
                            third:items[j].email,
                            fourth:items[j].subject,
                            fifth:items[j].spark,

                         });
                  };

         };

    },
    setPages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    },

    planetchart_data(){
      if (ls.getItem(moment().subtract(0, 'days').format('L')) != null){
        this.day0 = Number(ls.getItem(moment().subtract(0, 'days').format('L')).length);
      }
      if (ls.getItem(moment().subtract(1, 'days').format('L')) != null){
        this.day1 = Number(ls.getItem(moment().subtract(1, 'days').format('L')).length);
      }
      if (ls.getItem(moment().subtract(2, 'days').format('L')) != null){
        this.day2 = Number(ls.getItem(moment().subtract(2, 'days').format('L')).length);
      }
      if (ls.getItem(moment().subtract(3, 'days').format('L')) != null){
        this.day3 = Number(ls.getItem(moment().subtract(3, 'days').format('L')).length);
      }
      if (ls.getItem(moment().subtract(4, 'days').format('L')) != null){
        this.day4 = Number(ls.getItem(moment().subtract(4, 'days').format('L')).length);
      }
      if (ls.getItem(moment().subtract(5, 'days').format('L')) != null){
        this.day5 = Number(ls.getItem(moment().subtract(5, 'days').format('L')).length);
      }
      if (ls.getItem(moment().subtract(6, 'days').format('L')) != null){
        this.day6 = Number(ls.getItem(moment().subtract(6, 'days').format('L')).length);
      }
    }

  // end mothods
  },
    computed: {
    displayedPosts () {
      return this.paginate(this.posts);
    }
  },
  watch: {
    posts () {
      this.setPages();
    }

  },
  created(){
    this.getPosts();
    this.planetchart_data();
  },
  filters: {
    trimWords(value){
      return value.split(" ").splice(0,20).join(" ") + '...';
    }
  },
mounted() {
  this.planetChartData.data.datasets[0].data = [this.day6, this.day5, this.day4, this.day3, this.day2, this.day1, this.day0];
  this.createChart('planet-chart', this.planetChartData);
  this.createChart('bubble-chart', this.bubbleChartData)
}


//end export default
}


</script>
<style>

</style>
