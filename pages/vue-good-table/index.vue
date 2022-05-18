<template>
  <div>
    <h1>vue-good-table</h1>
    <VueGoodTable :total="total" :data="data"></VueGoodTable>
  </div>
</template>
<script>
import VueGoodTable from '@/components/VueGoodTable'

export default {
  component: {
    VueGoodTable
  },
  data() {
    return {
      currentPage: 1,
      per_page: 10,
      total: 35,
      data: [
        {
          id: 1,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 2,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 3,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 4,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 5,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 6,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 7,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 8,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 9,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
        {
          id: 10,
          visitors: 100,
          sales: 50,
          isBargain: true,
          categoryId: 1,
          weatherId: 1
        },
      ]
    }
  },
}

</script>
