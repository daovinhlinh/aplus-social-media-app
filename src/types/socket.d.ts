import { LegacyRef, Ref } from 'react';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  [type: string]: (param: any) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export interface ICall {
  isReceivedCall: boolean;
  from: any;
  name: string;
  signal: any;
}

type TSocketContext = {
  stream: any,
  me: string,
  call: ICall,
  callAccepted: boolean,
  callEnded: boolean,
  name: string,
  setName: (name: string) => void,
  myVideo: LegacyRef<HTMLVideoElement>,
  userVideo: LegacyRef<HTMLVideoElement>,
  callUser: (id: string) => void,
  endCall: () => void,
  answerCall: () => void,
}