const portfolios = [
  {
    id: 1,
    category: "Animation",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "g",
    icon2: "y",
    image:
      "https://static.billboard.com/files/2021/06/twice-2021-cr-JYP-Entertainment-billboard-1548-1623249916-compressed.jpg",

    title: "Twice",
  },
  {
    id: 2,
    category: "Poop",
    link1: "www.youtube.com",
    link2: "www.github.com",
    icon1: "O",
    icon2: "P",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    title: "Tree",
  },
];

export default portfolios;
// xd
// https://codesandbox.io/s/responsive-sticky-header-on-scroll-kmk23?file=/src/index.js
// https://codesandbox.io/s/perlin-cubes-forked-29ftd?file=/src/use-postprocessing.js
// Fetch data
/*
	useEffect(() => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => {
					setData(json);
					setloading(true);
					setTimeout(() => {
						setcompleted(true);
					}, 1000);
				});
		}, 2000);
	}, []);
*/
