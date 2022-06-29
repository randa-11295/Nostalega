const RoutsLink =()=>{
    return (
        <ListItem sx={{ borderTop: "1px solid var(--creemy)" }} key={text}>
        <ListItemButton>
          <ListItemText
            primary={text}
            sx={{ textAlign: "center" }}
            onClick={() => {
              useCustomRoute("category");
            }}
          />
        </ListItemButton>
      </ListItem>
    )
}