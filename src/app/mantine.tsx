// hero: {
//   position: "relative",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundImage: `url(/hero.jpg)`,
// },

// container: {
//   height: rem(700),
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "flex-end",
//   alignItems: "flex-start",
//   paddingBottom: `calc(${theme.spacing.xl} * 6)`,
//   zIndex: 1,
//   position: "relative",

//   [theme.fn.smallerThan("sm")]: {
//     height: rem(500),
//     paddingBottom: `calc(${theme.spacing.xl} * 3)`,
//   },
// },

// title: {
//   color: theme.white,
//   fontSize: rem(60),
//   fontWeight: 900,
//   lineHeight: 1.1,

//   [theme.fn.smallerThan("sm")]: {
//     fontSize: rem(40),
//     lineHeight: 1.2,
//   },

//   [theme.fn.smallerThan("xs")]: {
//     fontSize: rem(28),
//     lineHeight: 1.3,
//   },
// },

// description: {
//   color: theme.white,
//   maxWidth: 600,

//   [theme.fn.smallerThan("sm")]: {
//     maxWidth: "100%",
//     fontSize: theme.fontSizes.sm,
//   },
// },

///Navbar

//   link: {
//     display: "flex",
//     alignItems: "center",
//     height: "100%",
//     paddingLeft: theme.spacing.md,
//     paddingRight: theme.spacing.md,
//     textDecoration: "none",
//     color: theme.colorScheme === "dark" ? theme.white : theme.black,
//     fontWeight: 500,
//     fontSize: theme.fontSizes.sm,

//     [theme.fn.smallerThan("sm")]: {
//       height: rem(42),
//       display: "flex",
//       alignItems: "center",
//       width: "100%",
//     },

//     ...theme.fn.hover({
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[6]
//           : theme.colors.gray[0],
//     }),
//   },

//   subLink: {
//     width: "100%",
//     padding: `${theme.spacing.xs} ${theme.spacing.md}`,
//     borderRadius: theme.radius.md,

//     ...theme.fn.hover({
//       backgroundColor:
//         theme.colorScheme === "dark"
//           ? theme.colors.dark[7]
//           : theme.colors.gray[0],
//     }),

//     "&:active": theme.activeStyles,
//   },

//   dropdownFooter: {
//     backgroundColor:
//       theme.colorScheme === "dark"
//         ? theme.colors.dark[7]
//         : theme.colors.gray[0],
//     margin: `calc(${theme.spacing.md} * -1)`,
//     marginTop: theme.spacing.sm,
//     padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
//     paddingBottom: theme.spacing.xl,
//     borderTop: `${rem(1)} solid ${
//       theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
//     }`,
//   },

//   hiddenMobile: {
//     [theme.fn.smallerThan("sm")]: {
//       display: "none",
//     },
//   },

//   hiddenDesktop: {
//     [theme.fn.largerThan("sm")]: {
//       display: "none",
//     },
//   },

// <div className={classes.hero}>
{
  /* <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      /> */
}
{
  /* <Container className={classes.container}> */
}
{
  /* <Title className={classes.title}>
          A fully featured React components library
        </Title> */
}
{
  /* <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text> */
}

{
  /* <Button
          variant="filled"
          size="xl"
          radius="xl"
          className="mt-[36px] bg-[#228be6]"
        >
          Get started
        </Button> */
}
{
  /* </Container> */
}
// </div>

// <Box>
//   <Header height={60} px="md">
//     <Group position="apart" sx={{ height: "100%" }}>
//       <Image src="/hospital.png" alt="Logo" width={60} height={30} />

//       <Group
//         sx={{ height: "100%" }}
//         spacing={0}
//         className={classes.hiddenMobile}
//       >
//         <a href="#" className={classes.link}>
//           Home
//         </a>
//         <HoverCard
//           width={600}
//           position="bottom"
//           radius="md"
//           shadow="md"
//           withinPortal
//         >
//           <HoverCard.Target>
//             <a href="#" className={classes.link}>
//               <Center inline>
//                 <Box component="span" mr={5}>
//                   Features
//                 </Box>
//                 <IconChevronDown
//                   size={16}
//                   color={theme.fn.primaryColor()}
//                 />
//               </Center>
//             </a>
//           </HoverCard.Target>

//           <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
//             <Group position="apart" px="md">
//               <Text fw={500}>Features</Text>
//               <Anchor href="#" fz="xs">
//                 View all
//               </Anchor>
//             </Group>

//             <Divider
//               my="sm"
//               mx="-md"
//               color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
//             />

//             <SimpleGrid cols={2} spacing={0}>
//               {links}
//             </SimpleGrid>

//             <div className={classes.dropdownFooter}>
//               <Group position="apart">
//                 <div>
//                   <Text fw={500} fz="sm">
//                     Get started
//                   </Text>
//                   <Text size="xs" color="dimmed">
//                     Their food sources have decreased, and their numbers
//                   </Text>
//                 </div>
//                 <Button variant="default">Get started</Button>
//               </Group>
//             </div>
//           </HoverCard.Dropdown>
//         </HoverCard>
//         <a href="#" className={classes.link}>
//           Learn
//         </a>
//         <div className={classes.link}>
//           <ThemeToggle />
//         </div>
//       </Group>

//       <Group className={classes.hiddenMobile}>
//         <Button variant="default">Log in</Button>
//         <Button className="bg-[#228be6]">Sign up</Button>
//       </Group>

//       <Burger
//         opened={drawerOpened}
//         onClick={toggleDrawer}
//         className={classes.hiddenDesktop}
//       />
//     </Group>
//   </Header>

//   <Drawer
//     opened={drawerOpened}
//     onClose={closeDrawer}
//     size="100%"
//     padding="md"
//     title="Navigation"
//     className={classes.hiddenDesktop}
//     zIndex={1000000}
//   >
//     <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
//       <Divider
//         my="sm"
//         color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
//       />

//       <a href="#" className={classes.link}>
//         Home
//       </a>
//       <UnstyledButton className={classes.link} onClick={toggleLinks}>
//         <Center inline>
//           <Box component="span" mr={5}>
//             Features
//           </Box>
//           <IconChevronDown size={16} color={theme.fn.primaryColor()} />
//         </Center>
//       </UnstyledButton>
//       <Collapse in={linksOpened}>{links}</Collapse>
//       <a href="#" className={classes.link}>
//         Learn
//       </a>
//       {/* <div className={classes.link} ><ThemeToggle  /></div> */}

//       <Divider
//         my="sm"
//         color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
//       />

//       <Group position="center" grow pb="xl" px="md">
//         <Button variant="default">Log in</Button>
//         <Button>Sign up</Button>
//       </Group>
//     </ScrollArea>
//   </Drawer>
// </Box>
