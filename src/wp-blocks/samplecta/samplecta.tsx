    //import the corresponding module styles for use
    import styles from './samplecta.module.scss';

    //function based component definition
    function SampleCTA(props:any) {

      return (
        <>
          <div className={styles.ctawrapper}>					
            <h3>This is the rendering component</h3>
          </div>
        </>
      );
    }

    //export of component for usage/access
    export default SampleCTA; 