import React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { closestCenter, DndContext } from "@dnd-kit/core";
import MyStockChart from "./highchart1";
import MyLineChart from "./highchart2";
import MyBarChart from "./highchart3";
import MyAreaChart from "./highchart5";
import MyPieChart from "./highchart4";
import MyPolarChart from "./highchart6";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Grid,
  Typography,
  Box,
  Select,
  MenuItem,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Button,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const SortablePaper = ({ id, activeId }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const transitionDuration = transition ? transition.duration : 0;
  const isDragging = activeId === id;
  const style = {
    transition: `transform ${transitionDuration}ms ease-in-out, background-color ${transitionDuration}ms ease-in-out`,
    transform: CSS.Transform.toString(transform),
    // padding: "1vh",
    cursor: "grab",
    backgroundColor: isDragging ? "#f1f1f1" : "transparent",
    margin: "1vh",
    position: "relative",
    height: "38.5vh",
  };

  let chartComponent;
  switch (id) {
    case "1":
      chartComponent = <MyStockChart />;
      break;
    case "2":
      chartComponent = <MyLineChart />;
      break;
    case "3":
      chartComponent = <MyBarChart />;
      break;
    case "5":
      chartComponent = <MyAreaChart />;
      break;
    case "4":
      chartComponent = <MyPieChart />;
      break;
    case "6":
      chartComponent = <MyPolarChart />;
      break;
    default:
      chartComponent = null;
  }

  return (
    <Paper
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      elevation={10}
    >
      <Typography
        variant="h4"
        sx={{ float: "right", fontSize: "3.5vh", mt: "1vh", mr: "2.4vh" }}
      >
        {" "}
        {id}{" "}
      </Typography>
      {chartComponent}
    </Paper>
  );
};

const Users1 = () => {
  const [papers, setPapers] = useState(() => {
    const savedPapers = localStorage.getItem("papers");
    return savedPapers
      ? JSON.parse(savedPapers)
      : [
          { id: "1" },
          { id: "2" },
          { id: "3" },
          { id: "4" },
          { id: "5" },
          { id: "6" },
        ];
  });
  const [activeId, setActiveId] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    localStorage.setItem("papers", JSON.stringify(papers));
  }, [papers]);

  const onDragStart = (event) => {
    setActiveId(event.active.id);
    setIsDragging(true);
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    setIsDragging(false);
    setActiveId(null);
    if (!active || !over || active.id === over.id) {
      return;
    }

    setActiveId(null);
    if (active.id === over.id) {
      return;
    }
    setPapers((papers) => {
      const oldIndex = papers.findIndex((paper) => paper.id === active.id);
      const newIndex = papers.findIndex((paper) => paper.id === over.id);
      return arrayMove(papers, oldIndex, newIndex);
    });
  };

  const addChart = (id) => {
    if (id) {
      setPapers([...papers, { id }]);
    }
  };

  const removeChart = (id) => {
    const deletedIndex = papers.findIndex((paper) => paper.id === id);
    const deletedChart = papers[deletedIndex];

    setLastDeletedChart(deletedChart);
    setLastDeletedIndex(deletedIndex);

    setPapers(papers.filter((paper) => paper.id !== id));
  };

  const availableCharts = ["1", "2", "3", "4", "5", "6"].filter(
    (id) => !papers.some((paper) => paper.id === id)
  );

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [lastDeletedChart, setLastDeletedChart] = useState(null);
  const [lastDeletedIndex, setLastDeletedIndex] = useState(null);

  const handleUndoDelete = () => {
    if (lastDeletedChart !== null && lastDeletedIndex !== null) {
      setPapers((prevPapers) => {
        const newPapers = [...prevPapers];
        newPapers.splice(lastDeletedIndex, 0, lastDeletedChart);
        return newPapers;
      });
      setLastDeletedChart(null);
      setLastDeletedIndex(null);
    }
    setOpen(false);
  };

  return (
    <Box className="users">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "2vh 1vh",
          flexDirection: "row",
          border: "1px solid black",
          borderRadius: "8px",
          padding: "1vh",
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontSize: "5vh" }}>
          Total: {papers.length}
        </Typography>

        {availableCharts.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Select
              value=""
              onChange={(e) => addChart(e.target.value)}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <em>Select Chart</em>;
                }
                return selected;
              }}
              sx={{
                height: "6vh",
                width: { xs: "40vw", sm: "10vw" },
                fontSize: "2vh",
              }}
            >
              <MenuItem
                disabled
                value=""
                sx={{
                  height: "5vh",
                  width: { xs: "40vw", sm: "10vw" },
                  fontSize: "2vh",
                }}
              >
                <em>Select Chart</em>
              </MenuItem>
              {availableCharts.map((id) => (
                <MenuItem
                  key={id}
                  value={id}
                  sx={{
                    height: "5vh",
                    width: { xs: "40vw", sm: "10vw" },
                    fontSize: "2vh",
                  }}
                >
                  Chart {id}
                </MenuItem>
              ))}
            </Select>{" "}
          </Box>
        ) : (
          ""
        )}
      </Box>
      {papers.length > 0 ? (
        <>
          <Box sx={{ padding: "1vh" }}>
            <DndContext
              collisionDetection={closestCenter}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            >
              <SortableContext
                items={papers}
                strategy={verticalListSortingStrategy}
              >
                <Grid container spacing={2}>
                  {papers.map((paper, index) => {
                    let gridColumn;
                    if (index < 3) {
                      gridColumn = 4;
                    } else if (index < 5) {
                      gridColumn = 6;
                    } else {
                      gridColumn = 12;
                    }
                    return (
                      <Grid item xs={12} sm={gridColumn} key={paper.id}>
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          sx={{
                            position: "absolute",
                            zIndex: "10",
                            margin: "2vh",
                            display: isDragging ? "none" : "flex",
                          }}
                        >
                          <Tooltip title="Delete">
                            <IconButton
                              style={{ zIndex: 10 }}
                              onClick={() => {
                                removeChart(paper.id);
                                handleClick();
                              }}
                            >
                              <Delete sx={{ fontSize: "3vh" }} />
                            </IconButton>
                          </Tooltip>
                        </Box>

                        <SortablePaper id={paper.id} activeId={activeId} />
                      </Grid>
                    );
                  })}
                </Grid>
              </SortableContext>
            </DndContext>
          </Box>
        </>
      ) : (
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          There is no data
        </Typography>
      )}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          action={
            <Button color="inherit" size="small" onClick={handleUndoDelete}>
              UNDO
            </Button>
          }
        >
          Highchart deleted successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Users1;
