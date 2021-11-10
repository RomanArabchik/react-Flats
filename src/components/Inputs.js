import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { requestFlats, requestHouses, requestStreets } from '../services/getData';
import { useDispatch, useSelector } from 'react-redux';
import { clear, clearFlats, setFlat, setHouse, setStreet } from '../store/inputs/actions';

export default function ComboBox() {
  const dispatch= useDispatch()
  const inputs = useSelector(state => state)

  useEffect(() => {
    dispatch(requestStreets())
  }, [])

  const changeStreet = (e, value) => {
    if (value) {
      dispatch(requestHouses(value.id))
      console.log(value.id)
    } else {
      dispatch(setHouse(''))
      dispatch(setFlat(''))
      dispatch(clear())
    }
    dispatch(setStreet(value))
  }

  const changeHouse = (event, value) => {
    if (value) {
      dispatch(requestFlats(value.id))
      console.log(value.id)
    } else {
      dispatch(setFlat(''))
      dispatch(clearFlats())
    }
    dispatch(setHouse(value))
  }

  const changeFlat = (event, value) => {
    dispatch(setFlat(value))
  }

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item>
        <Autocomplete
          id="combo-box-demo"
          value={inputs.street}
          onChange={changeStreet}
          options={inputs.streets}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField required {...params} label="Улица" />}
        />
      </Grid>
      <Grid item>
        <Autocomplete
          value={inputs.house}
          onChange={changeHouse}
          id="combo-box-demo"
          options={inputs.houses}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Дом" />}
      />
      </Grid>
      <Grid item>
        <Autocomplete
          value={inputs.flat}
          onChange={changeFlat}
          id="combo-box-demo"
          options={inputs.flats}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Кв./офис" />}
        />
      </Grid>
    </Grid>
  );
}