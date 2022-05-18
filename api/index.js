const dataList = [
  {id:1,visitors:418,sales:49,isBargain:true,categoryId:2,weatherId:3},
  {id:2,visitors:159,sales:66,isBargain:true,categoryId:1,weatherId:2},
  {id:3,visitors:922,sales:98,isBargain:true,categoryId:2,weatherId:2},
  {id:4,visitors:518,sales:39,isBargain:false,categoryId:5,weatherId:1},
  {id:5,visitors:445,sales:34,isBargain:false,categoryId:5,weatherId:1},
  {id:6,visitors:398,sales:100,isBargain:false,categoryId:3,weatherId:1},
  {id:7,visitors:253,sales:14,isBargain:false,categoryId:1,weatherId:1},
  {id:8,visitors:304,sales:32,isBargain:true,categoryId:5,weatherId:1},
  {id:9,visitors:919,sales:37,isBargain:false,categoryId:1,weatherId:3},
  {id:10,visitors:242,sales:80,isBargain:true,categoryId:2,weatherId:1},
  {id:11,visitors:214,sales:34,isBargain:true,categoryId:4,weatherId:1},
  {id:12,visitors:396,sales:71,isBargain:true,categoryId:3,weatherId:3},
  {id:13,visitors:983,sales:79,isBargain:true,categoryId:2,weatherId:1},
  {id:14,visitors:933,sales:25,isBargain:false,categoryId:4,weatherId:3},
  {id:15,visitors:382,sales:22,isBargain:false,categoryId:3,weatherId:2},
  {id:16,visitors:450,sales:29,isBargain:false,categoryId:4,weatherId:3},
  {id:17,visitors:266,sales:39,isBargain:false,categoryId:4,weatherId:1},
  {id:18,visitors:811,sales:19,isBargain:true,categoryId:5,weatherId:3},
  {id:19,visitors:430,sales:39,isBargain:true,categoryId:1,weatherId:1},
  {id:20,visitors:590,sales:11,isBargain:true,categoryId:1,weatherId:3},
  {id:21,visitors:859,sales:23,isBargain:true,categoryId:5,weatherId:3},
  {id:22,visitors:559,sales:75,isBargain:false,categoryId:1,weatherId:2},
  {id:23,visitors:150,sales:40,isBargain:true,categoryId:3,weatherId:1},
  {id:24,visitors:203,sales:16,isBargain:false,categoryId:4,weatherId:3},
  {id:25,visitors:321,sales:57,isBargain:false,categoryId:1,weatherId:2},
  {id:26,visitors:587,sales:18,isBargain:true,categoryId:5,weatherId:3},
  {id:27,visitors:188,sales:22,isBargain:false,categoryId:4,weatherId:2},
  {id:28,visitors:527,sales:84,isBargain:false,categoryId:4,weatherId:3},
  {id:29,visitors:672,sales:12,isBargain:true,categoryId:4,weatherId:3},
  {id:30,visitors:482,sales:83,isBargain:true,categoryId:5,weatherId:3},
  {id:31,visitors:772,sales:10,isBargain:false,categoryId:3,weatherId:2},
  {id:32,visitors:470,sales:53,isBargain:false,categoryId:3,weatherId:3},
  {id:33,visitors:349,sales:50,isBargain:false,categoryId:4,weatherId:3},
  {id:34,visitors:737,sales:57,isBargain:false,categoryId:5,weatherId:2},
  {id:35,visitors:673,sales:81,isBargain:true,categoryId:5,weatherId:2},
];
const columnList = [
  {
    label: 'ID',
    field: 'id',
    type: 'number',
  },
  {
    label: '来客数',
    field: 'visitors',
    type: 'number',
  },
  {
    label: '販売数',
    field: 'sales',
    type: 'number',
  },
  {
    label: 'セール開催',
    field: 'isBargain',
    type: 'boolean',
  },
  {
    label: 'カテゴリーID',
    field: 'categoryId',
    type: 'number',
  },
  {
    label: '天気ID',
    field: 'weatherId',
    type: 'number',
  },
];
const total = dataList.length;
const perPage = 10;
export default {
  getData(currentPage, field, type) {
    let start = perPage * (currentPage-1);
    let end = start + perPage;
    let sorted = dataList;
    if (field !== null && type !== null) {
      sorted = _.orderBy(dataList, [field], [type]);
    }
    return {
      columnList: columnList,
      total: total,
      data: sorted.slice(start, end)
    };
  },
}
