import { Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import RegexComponents from "components/RegexComponents";
import {patterns} from "data/regex"

const RegexPage = () => {
  //! State

  //! Function

  //! Render
  return (
    <div className="regex-page">
      <Typography variant="h4" marginBottom={4}>Useful Regex Patterns</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {patterns.map((el, index) => (
          <Grid item xs={12} sm={4} md={4} key={el.name}>
            <RegexComponents
              title={el.name}
              description={el.description}
              regexValue={el.regex}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RegexPage;
