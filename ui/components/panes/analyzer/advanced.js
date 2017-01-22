import React  from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';
import './advanced.scss';

import io from 'socket.io-client';
let socket = io();

var test_para =
{ 
    "context" : {
        "output_dir": "----",
        "chip_layout": [
          "/home/alex/data/array/Axiom_GW_Hu-CHB_SNP_r2_1/Axiom_GW_Hu-CHB_SNP.r2.cdf"
        ],
        "sample_files": [
          "/home/alex/data/array/GSE78098/raw_data/GSM2066964_301-044_CHB.CEL",
          "/home/alex/data/array/GSE78098/raw_data/GSM2066965_301-049_CHB.CEL",
          "/home/alex/data/array/GSE78098/raw_data/GSM2066966_301-050_CHB.CEL",
          "/home/alex/data/array/GSE78098/raw_data/GSM2066967_301-051_CHB.CEL",
          "/home/alex/data/array/GSE78098/raw_data/GSM2066968_301-053_CHB.CEL"
        ],
        "clustering_models": [
          "/home/john/workdir/CPT/birdseed/pr/model/pr_all_eu_32.mdl"
        ],
        "quantile_norm_target_sketch": "./sketch.txt",
        "probeset_list" : "./pslist/biallelic.ps"
    },
    "pipeline" : [
        {
          "name": "Input:DataLoader",
          "parameter": {
            "thread_num": {
                "type" : "literal",
                "content" : 16
            }
          }
        },
        {
          "name": "Train:TargetSketchEstimation",
          "parameter": {
            "scaling_factor": {
                "type" : "literal",
                "content" : 0
            }
          }
        },
        {
          "name": "Transform:QuantileNormalization",
          "parameter": {
            "target_sketch": {
                "type" : "ref",
                "content" : "quantile_norm_target_sketch"
            },
            "scaling_factor": {
                "type" : "literal",
                "content" : 0
            }
          }
        },
        {
          "name": "Transform:AlleleSummarization",
          "parameter": {
            "probeset_list": {
                "type" : "ref",
                "content" : "probeset_list"
            }
          }
        },
        {
          "name": "Train:BirdseedGrandModelProbesetChoice",
          "parameter": {
            "rnd_nums": {
                "type" : "literal",
                "content" : 5000
            }
          }
        },
        {
          "name": "Transform:LogTransform",
          "parameter": {}
        },
        {
          "name": "Train:BirdseedGrandModelTraining",
          "parameter": {
            "tol": {
                "type" : "literal",
                "content" : 1e-05
            },
            "max_iter": {
                "type" : "literal",
                "content" : 500
            },
            "n_init": {
                "type" : "literal",
                "content" : 20
            },
            "n_components": {
                "type" : "literal",
                "content" : 3
            }
          }
        },
        {
          "name": "Train:BirdseedProbesetTraining",
          "parameter": {
            "fitting_algo": {
              "type" : "custom",
              "content" : {
                "name": "PRFittingRT",
                "trim_rate": 5,
                "subtype": "KMeans"
              }
            },
            "thread_num": {
                "type" : "literal",
                "content" : 32
            }
          }
        }
    ]
}
export default class Advanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      functionFocus: '',
      status: 0,
      output: 'Please prepare and setup your pipeline.'
    }
    this.onRun = this.onRun.bind(this);
  }
  onRun() {
    console.log("onRun");

    socket.emit('toEngine', test_para);
  }
  refresh(res) {
    switch(res.cmd)
    {
      case "imgprocess":
        this.setState({ 
            status:       res.status,
            output:       res.output
        });
        break;
      case "pipeline":
        this.setState({
            status:       res.status,
            output:       res.output
        });
    }
  }
  render() {

    const buttonsInstance = (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.onRun}>Run</Button>
      </ButtonToolbar>
    );
    const output = this.state.output;
    return (
      <div>
        <h4>Advanced</h4>
        <div className='row'>
          <div className='col-md-offset-6 col-md-6 col-sm-offset-2 col-sm-8'>
            {buttonsInstance}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-sm-3'>
            {output}
          </div>
          <div className='col-md-6 col-sm-8'>
            <div>name: 'A', type: 'pre-processing'</div>
            <div>name: 'B', type: 'normalization'</div>
            <div>name: 'C', type: 'summarization'</div>
            <div>name: 'D', type: 'geno-typing'</div>
          </div>
        </div>
      </div>
    );
  }
}