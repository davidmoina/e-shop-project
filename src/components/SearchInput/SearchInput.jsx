import styles from './searchInput.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = ({data}) => {

  const [text, setText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [focus, setFocus] = useState(false);

  const navigate = useNavigate()

  const handleSearch = (e) => {
    setText(e.target.value);

    if(text.length >= 2) {
      const results = data.filter(prod => prod.title.toLowerCase().includes(text.toLowerCase()))
      return setFilteredProducts(results);
    } 
    return setFilteredProducts([]);
  }

  const handleNavigate= (item) => {
    navigate(`detail/${item.id}`)
    setFocus(false)
    setText("")
    setFilteredProducts([])
  }

  return (
    <div className={styles.inputWrapper}>
      <button onClick={() => setFocus(!focus)} className={`${styles.icon} ${focus && styles.iconFocus}`}>
        <SearchIcon style={{fontSize: 25}}/>
      </button>
      <input onChange={handleSearch} placeholder="search.." value={text} className={styles.input} name="text" type="text" />
      <div className={styles.resultsDiv}>
        <ul>
          {filteredProducts.map(item => (
            <li onClick={() => handleNavigate(item)} key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchInput