
function constantData() {
    const row1Data1 = [
        { text: 'شحن', percentage: '20%', color: 'w3-red' },
        { text: 'كارت', percentage: '35%', color: 'w3-red' },
        { text: 'حضرتك', percentage: '85%', color: 'w3-blue' },
    ];

    const row2Data1 = [
        { text: 'شكراً', percentage: '15%', color: 'w3-yellow' },
        { text: 'ايوة', percentage: '10%', color: 'w3-light-green' },
        { text: 'لا', percentage: '50%', color: 'w3-purple' },
        { text: 'مشكلة', percentage: '20%', color: 'w3-light-blue' },
    ];
    const row1Data2 = [
        { text: 'الشحن', percentage: '20%', color: 'w3-red' },
        { text: 'استعلم', percentage: '10%', color: 'w3-black' },
        { text: 'باقة', percentage: '90%', color: 'w3-blue' },
    ];

    const row2Data2 = [
        { text: 'انتظار', percentage: '10%', color: 'w3-green' },
        { text: 'لا', percentage: '60%', color: 'w3-purple' },
        { text: 'عايز', percentage: '30%', color: 'w3-yellow' },
    ];

    const messageData1 = [
        {
            text: "مرحباً",
            sender: "CR",
            timestamp: "12:15",
            color:"yellow",
        },
        {
            text: "مساء الخير يا فندم اقدر اساعد حضرتك في ايه",
            sender: "AG",
            timestamp: "12:30",
            color:"yellow",
        },
        {
            text: "انا عندي مشكلة انا شحنت كارت رصيد من حوالي نص ساعة و موصلش",
            sender: "CR",
            timestamp: "12:35",
            color:"red",
        },
        {
            text: "تمام يا فندم انتظر معايا لحظات",
            sender: "AG",
            timestamp: "12:44",
            color:"yellow",
        },
        {
            text: "علي نفس الرقم؟",
            sender: "AG",
            timestamp: "12:45",
            color:"yellow",
        },
        {
            text: "ايوة",
            sender: "CR",
            timestamp: "12:55",
            color:"green",
        },
        {
            text: "قيمة الكرت اللي حضرتك شحنتها بكام؟",
            sender: "AG",
            timestamp: "1:00",
            color:"yellow",
        },
        {
            text: "خمسين جنيه",
            sender: "CR",
            timestamp: "1:03",
            color:"yellow",
        },
        {
            text: "هل وصل لحضرتك رسالة دلوقتي؟",
            sender: "AG",
            timestamp: "1:05",
            color:"yellow",
        },
        {
            text: "لا",
            sender: "CR",
            timestamp: "1:07",
            color:"red",
        },
        {
            text: "و دلوقتي؟",
            sender: "AG",
            timestamp: "1:15",
            color:"yellow",
        },
        {
            text: "ايوة",
            sender: "CR",
            timestamp: "1:17",
            color:"green",
        },
        {
            text: "شكراً",
            sender: "CR",
            timestamp: "1:17",
            color:"green",
        },
        {
            text: "العفو شكراً لحضرتك",
            sender: "AG",
            timestamp: "1:15",
            color:"green",
        },
    ];

    const messageData2 = [
        {
            text: "مرحباً",
            sender: "CR",
            timestamp: "3:15",
            color:"yellow",
        },
        {
            text: "مساء الخير يا فندم اقدر اساعد حضرتك في ايه",
            sender: "AG",
            timestamp: "3:30",
            color:"yellow",
        },
        {
            text: "عايز استعلم عن الشحن المتبقي في الباقة",
            sender: "CR",
            timestamp: "3:31",
            color:"yellow",
        },
        {
            text: "تمام يا فندم انتظر معايا لحظات",
            sender: "AG",
            timestamp: "3:32",
            color:"yellow",
        },
        {
            text: "علي نفس الرقم؟",
            sender: "AG",
            timestamp: "3:34",
            color:"yellow",
        },
        {
            text: "لا",
            sender: "CR",
            timestamp: "3:35",
            color:"red",
        },
        {
            text: "ممكن الرقم اللي حضرتك عايز تستعلم عنه؟",
            sender: "AG",
            timestamp: "3:37",
            color:"yellow",
        },
        {
            text: "01153248888",
            sender: "CR",
            timestamp: "3:39",
            color:"yellow",
        },
        {
            text: "تمام",
            sender: "AG",
            timestamp: "3:41",
            color:"green",
        },
        {
            text: "متبقي 10 جيجا و 200 دقيقة محلية",
            sender: "AG",
            timestamp: "3:43",
            color:"yellow",
        },
        {
            text: "شكراً",
            sender: "CR",
            timestamp: "3:43",
            color:"green",
        },
        {
            text: "العفو",
            sender: "AG",
            timestamp: "3:45",
            color:"yellow",
        }
    ];

    const lineChart1 = {
        options: {
            chart: {
                id: 'line-chart',
            },
            xaxis: {
                categories: ['15s', '30s', '45s', '60s', '1m15s', '1m30s', '1m45s'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [60, 75, 80, 75, 30,25,25],
            },
        ],
    };
    const lineChart2 = {
        options: {
            chart: {
                id: 'line-chart',
            },
            xaxis: {
                categories: ['15s', '30s', '45s', '60s', '1m15s', '1m30s', '1m45s'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [40, 35, 50, 80, 60,60,65],
            },
        ],
    };

    const lineChart12 = {
        options: {
            chart: {
                id: 'line-chart-2',
            },
            xaxis: {
                categories: ['15s', '30s', '45s', '60s', '1m15s', '1m30s', '1m45s'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [80, 80, 60, 40, 35,40,40],
            },
        ],
    };

    const lineChart22 ={
        options: {
            chart: {
                id: 'line-chart-2',
            },
            xaxis: {
                categories: ['15s', '30s', '45s', '60s', '1m15s', '1m30s', '1m45s'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [10, 30, 60, 80, 60,55,50],
            },
        ],
    };

    const chart1Data = {
        options: {
            chart: {
                id: "basic-pie-1",
            },
            labels: ['Neutral', 'Positive', 'Negative'],
            colors: ['#F4DF17', '#45D21C', '#E72C09'],
        },
        series: [30, 40, 45],
    };

    const chart1Data2 = {
        options: {
            chart: {
                id: "basic-pie-1",
            },
            labels: ['Neutral', 'Positive', 'Negative'],
            colors: ['#F4DF17', '#45D21C', '#E72C09'],
        },
        series: [10, 70, 5],
    };

    const chart2Data = {
        options: {
            chart: { id: "basic-pie-2", },
            labels: ['Neutral', 'Positive', 'Negative'],
            colors: ['#F4DF17', '#45D21C', '#E72C09'],
        },
        series: [25, 50, 20],
    };
   
    const chart2Data2 = {
        options: {
            chart: { id: "basic-pie-2", },
            labels: ['Neutral', 'Positive', 'Negative'],
            colors: ['#F4DF17', '#45D21C', '#E72C09'],
        },
        series: [5, 10, 80],
    };

    return { row1Data1, row2Data1, row1Data2, row2Data2, messageData1, messageData2, chart1Data, chart2Data ,chart1Data2,chart2Data2,lineChart1,lineChart2,lineChart12,lineChart22};
}

export default constantData;