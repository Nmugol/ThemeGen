import "../Css/Options.css"

const Options = () => {
    return ( 
        <div className="options">

            <div className="gtopbar options_panel">
                Topbar
                <ul>
                    <li>color</li>
                    <ul>
                        <li><div>Red:</div><div><input type="number" min={0} max={255} defaultValue={0}/></div></li>
                        <li><div>Green:</div><div><input type="number" min={0} max={255} defaultValue={0}/></div></li>
                        <li><div>Blue:</div><div><input type="number" min={0} max={255} defaultValue={0}/></div></li>
                        <li><div>Alfa:</div><div><input type="number" min={0} max={1} step={0.01} defaultValue={0}/></div></li>
                    </ul>

                    <li>margin</li>
                    <ul>
                        <li><div>Left:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Right:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Top:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Bottom:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                    </ul>

                    <li>pading</li>
                    <ul>
                        <li><div>Left:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Right:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Top:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Bottom:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                    </ul>
                </ul>
            </div>

            <div className="gbutton options_panel">
                Button
                <ul>
                    <li>color</li>
                    <ul>
                        <li><div>Red:</div><div><input type="number" min={0} max={255} defaultValue={0}/></div></li>
                        <li><div>Green:</div><div><input type="number" min={0} max={255} defaultValue={0}/></div></li>
                        <li><div>Blue:</div><div><input type="number" min={0} max={255} defaultValue={0}/></div></li>
                        <li><div>Alfa:</div><div><input type="number" min={0} max={1} step={0.01} defaultValue={0}/></div></li>
                    </ul>

                    <li>margin</li>
                    <ul>
                        <li><div>Left:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Right:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Top:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Bottom:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                    </ul>

                    <li>pading</li>
                    <ul>
                        <li><div>Left:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Right:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Top:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                        <li><div>Bottom:</div><div><input type="number" min={0} max={25} defaultValue={0}/></div></li>
                    </ul>
                </ul>
            </div>

            <div className="gwindows options_panel">
                windows
            </div>
        </div>
    );
}

export default Options;
