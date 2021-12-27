import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'TheWellnessGroup',
  connector: 'mongodb',
  url: 'mongodb+srv://admin:admin@awdproject.42lj4.mongodb.net/TheWellnessGroup?retryWrites=true&w=majority',
  host: '',
  port: 27017,
  user: 'admin',
  password: 'admin',
  database: 'TheWellnessGroup',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TheWellnessGroupDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'TheWellnessGroup';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.TheWellnessGroup', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
