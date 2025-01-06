import styles from './Stack.module.css';
import stackData from '../../data/Stack.json';
import StackCard from '../../components/StackCard/StackCard';

const Stack = () => {
  return (
    <div className={styles.container}>
      {stackData.categories.map((category) => (
        <div key={category.id}>
          <div className={styles.headerContainer}>
            <h2>{category.title}</h2>
          </div>

          <div className={styles.stackCardContainer}>
            {category.items.map((item, index) => (
              <StackCard
                key={index}
                title={item.title}
                seniority={item.seniority}
                percentual={item.percentual}
                iconName={item.iconName}
                description={item.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stack;