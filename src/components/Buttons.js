import React from 'react';
import Button from './BootrapsComponents/Button/Button'
import Icons from '../components/service/icons'
function Buttons(){
    return(
    //     <>
    //    <button type="button" className="btn btn-button btn-success">Click Me!</button>
    //    <Button content="Plus" />
    //    <Button type="warning" content="Plus" />
    //     </>
    <div className="demo-container pd-r-30">
        <div className="row">
            <div className="col-4">
                <h6>1. Buttons Colors</h6>
                <p>
                    Default button, example:
                    <code>
                        &lt;Button type="primary"&gt;Primary&lt;/Button&gt;
                    </code>
                </p>
                <Button type="primary">Primary Button</Button>
            </div>
             
            <div className="col-4">
                <h6>2. Buttons Success</h6>
                    <p>
                        Success button, example:
                        <code>
                            &lt;Button type="success"&gt;Success&lt;/Button&gt;
                        </code>
                    </p>
                <Button type="success">Success Button</Button>
            </div>
            <div className="col-4">
                <h6>3. Warning Colors</h6>
                <p>
                    Warning button, example:
                    <code>
                        &lt;Button type="warning"&gt;Warning&lt;/Button&gt;
                    </code>
                </p>
                <Button type="warning">Warning Button</Button>
            </div>
            <div className="col-4"> 
                <h6>4. Danger Colors</h6>
                <p>
                    Danger button, example:
                    <code>
                        &lt;Button type="danger"&gt;Danger&lt;/Button&gt;
                    </code>
                </p>
                <Button type="danger">Danger Button</Button>
            </div>
            <div className="col-4">
                <h6>5. Info Colors</h6>
                <p>
                    Info button, example:
                    <code>
                        &lt;Button type="info"&gt;Info&lt;/Button&gt;
                    </code>
                </p>
                <Button type="info">Info Button</Button>
            </div>
            <div className="col-4">
                <h6>6. Button loading</h6>
                <p>
                Button loading, example:
                <code>
                    &lt;Button type="primary" loading&gt;...&lt;/Button&gt;
                </code>
                </p>
                <Button type="info" loading>Loading Button</Button>
            </div>
            <div className="col-4">
                <h6>7. Active loading</h6>
                <p>
                Button Active, example:
                <p>
                    Active button, just add: <code>active</code> to
                    <code>&lt;Button /&gt;</code>.
                </p>
                </p>
                <Button type="info" active>Loading Button</Button>
            </div>
            <div className="col-4">
                <h6>7. Active loading</h6>
                <p>
                Button Icon, example:
                <p>
                    Active button, just add: <code>active</code> to
                    <code>&lt;Button /&gt;</code>.
                </p>
                </p>
                <Button type="info" >{Icons('add')} Add Button</Button>
            </div>
        </div>
    </div>
    );
}
export default Buttons;
